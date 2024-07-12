// @ts-nocheck
import { lucia } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";

export const load = async (event: Parameters<PageServerLoad>[0]) => {
	if (!event.locals.user) {
		return redirect(302, "/login");
	}
	return {
		user: event.locals.user
	};
};

export const actions = {
	default: async (event: import('./$types').RequestEvent) => {
		if (!event.locals.session) {
			return fail(401);
		}
		await lucia.invalidateSession(event.locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		event.cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});
		return redirect(302, "/login");
	}
};
;null as any as Actions;