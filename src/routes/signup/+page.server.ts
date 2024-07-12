import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import { generateId } from "lucia";
import { hash } from "@node-rs/argon2";
import { SqliteError } from "better-sqlite3";
import { db } from "$lib/server/db";
import type { Actions, PageServerLoad } from "./$types";
import { Schema } from "$lib/server/schema";
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { config } from 'dotenv';
config();

const mailDomain = process.env.SENDADDRESS 
const mailApiKey = process.env.MAILAPI 
console.log(mailDomain,mailApiKey)

// Temporary in-memory store for user data
const userDataStore = new Map<string, { username: string; email: string; password: string }>();
const random_password = generateId(6);

let check = "";

if (!mailDomain || !mailApiKey) {
    throw new Error("Environment variables MAIL_ADDRESS and MAIL_API_KEY must be set");
  }

export const load: PageServerLoad = async (event) => {
    if (event.locals.user) {
        throw redirect(302, "/");
    } else if (check === "true") {
        return { message: 'Form Submitted Successfully' };
    }
    return {};
};

export const actions: Actions = {
    first: async (event) => {
        const formData = await event.request.formData();
        const rawFormData = Object.fromEntries(formData);

        // Validate form data using Zod schema
        const result = Schema.safeParse(rawFormData);

        if (!result.success) {
            // If validation fails, return the first error message
            const errorMessage = result.error.issues[0]?.message || "Invalid input";
            return fail(400, { message: errorMessage });
        }
		const { username, email, password } = result.data;

        // Check if email already exists
        const emailStmt = db.prepare('SELECT email FROM user WHERE email = ?');
        const emailUser = emailStmt.get(email) as { email?: string };

        // Check if username already exists
        const usernameStmt = db.prepare('SELECT username FROM user WHERE username = ?');
        const usernameUser = usernameStmt.get(username) as { username?: string };

      		if (emailUser && emailUser.email === email) {
            // Email already exists
            return redirect(302, "/email-already-created");
     	  } else if (usernameUser && usernameUser.username === username) {
            // Username already exists
            return redirect(302, "/username-already-created");

			} else {
			userDataStore.set(email, { username, email, password });
			const mailerSend = new MailerSend({ apiKey: mailApiKey });
			const recipients = [new Recipient(email, "Recipient Name")];
            
			const emailParams = new EmailParams()
				.setFrom(new Sender(mailDomain, "Your Name"))
				.setTo(recipients)
				.setSubject("Your verification code")
				.setHtml(`Your verification code is: <strong>${random_password}</strong>`);
	
			try {
				await mailerSend.email.send(emailParams);
			} catch (error) {
				console.error("Failed to send verification email:", error);
				throw new Error("Failed to send verification email");
			}
	
			check = "true";
			}
		},
    verifyemail: async (event) => {
        const formData = await event.request.formData();
        const verificationPassword = formData.get('verification-password') as string;
        
        if (verificationPassword === random_password) {
            // Retrieve user data from the temporary store
            const email = [...userDataStore.keys()][0];
            const user = userDataStore.get(email);

            if (user) {
                const { username, email, password } = user;

                // Hash the password
                const passwordHash = await hash(password, {
                    memoryCost: 19456,
                    timeCost: 2,
                    outputLen: 32,
                    parallelism: 1
                });

                const userId = generateId(15);

                try {
                    db.prepare("INSERT INTO user (id, username, email, password_hash) VALUES(?, ?, ? , ?)").run(
                        userId,
                        username,
                        email,
                        passwordHash
                    );

                    const session = await lucia.createSession(userId, {});
                    const sessionCookie = lucia.createSessionCookie(session.id);
                    event.cookies.set(sessionCookie.name, sessionCookie.value, {
                        path: ".",
                        ...sessionCookie.attributes
                    });

                    // Clear the stored user data after successful registration
                    userDataStore.delete(email);
					check=""
                } catch (e) {
                    if (e instanceof SqliteError && e.code === "SQLITE_CONSTRAINT_UNIQUE") {
                        return fail(400, { message: "Username / E-mail already used" });
                    }
                    return fail(500, { message: "An unknown error occurred" });
                }

                return redirect(302, "/");
            } else {
                return fail(400, { message: "User data not found" });
            }
        } else {
            return fail(400, { message: "Invalid verification code" });
        }
    }
};
