import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params, url }) => {
    if (locals.user) {
        throw redirect(302, "/")
    }
    const token = params.token

    return { token }



};