import { z } from "zod";

// You can keep this if you need a generic schema elsewhere
export const Schema = z.object({
	username: z
		.string()
		.min(3)
		.max(31)
		.regex(/^[a-z0-9_-]+$/),
	email: z.string().email(),
	password: z.string().min(6).max(255)
});
export const LoginSchema = z.object({
	username: z
		.string()
		.min(3)
		.max(31)
		.regex(/^[a-z0-9_-]+$/),
	password: z.string().min(6).max(255)
});
