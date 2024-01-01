import { redirect } from '@sveltejs/kit'

export const POST = async ({ locals, cookies }) => {

    locals.token = null
    locals.user = undefined
    cookies.delete("token", { secure: false })


    throw redirect(303, "/auth?signin")

}