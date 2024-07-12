import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import { verify } from "@node-rs/argon2";
import { db } from "$lib/server/db";
import type { Actions, PageServerLoad } from "./$types";
import type { DatabaseUser } from "$lib/server/db";
import { LoginSchema } from "$lib/server/schema";

export const load: PageServerLoad = async (event) => {
  if (event.locals.user) {
    throw redirect(302, "/");
  }
  return {};
};

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const rawFormData = Object.fromEntries(formData);

    // Validate form data using Zod schema
    const result = LoginSchema.safeParse(rawFormData);

    if (!result.success) {
      const errorMessage = result.error.issues[0]?.message || "Invalid input";
      return fail(400, { message: errorMessage });
    }

    const { username, password } = result.data;

    const existingUser = db.prepare("SELECT * FROM user WHERE username = ?").get(username) as
      | DatabaseUser
      | undefined;

    if (!existingUser) {
      return fail(400, { message: "Incorrect username or password" });
    }

    const validPassword = await verify(existingUser.password_hash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!validPassword) {
      return fail(400, { message: "Incorrect username or password" });
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes,
    });

    return redirect(302, "/");
  },
};
