import { loadFlash } from "sveltekit-flash-message/server"

export const load = loadFlash(({ url, locals }) => {



    return { url: url.pathname, user: locals.user, token: locals.token }
})