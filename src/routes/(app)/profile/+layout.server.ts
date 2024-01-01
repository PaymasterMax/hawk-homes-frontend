import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url, locals }) => {
    const protect = ["messages", "listings", "moderation"]
    const y = protect.some(x => url.pathname.split("/").includes(x))

    if (y) {
        if (locals.user?.perm.role !== "Admin") {

            throw redirect(302, "/")
        }
    }




};