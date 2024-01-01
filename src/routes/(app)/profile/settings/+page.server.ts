import { fail, type Actions } from "@sveltejs/kit";
import { redirect } from 'sveltekit-flash-message/server'
import { setFlash, flashCookieOptions } from 'sveltekit-flash-message/server';
import type { PageServerLoad } from "./$types";
import { PUBLIC_BACKEND_URL } from "$env/static/public";
import { z } from "zod"
import type { User } from "$interface";
flashCookieOptions.secure = false
export const load: PageServerLoad = async (event) => {
    if (!event.locals.user) {
        throw redirect(302, "/")
    }
    const url = PUBLIC_BACKEND_URL + `users/profile`;
    const res = await fetch(url, {
        headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + event.locals.token }
    })

    const dt: { status: number, data: User } = await res.json()
    if (dt.status !== 200) {
        if (dt.status === 401) {
            setFlash({ type: 'error', message: 'Session timout Please Login' }, event);
            throw redirect(302, "/auth?signin")

        }
        throw redirect(302, "/")
    }

    return {
        profile: dt.data
    }
};

const changePasssword = z.object({
    password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must be atleast 8 chars" }).max(15, { message: "password must be less than 15 chars" }).trim(),
    password_confirm: z.string({ required_error: "Fill in password" }).min(8).trim(),

}).superRefine(({ password, password_confirm }, ctx) => {
    if (password !== password_confirm) {
        ctx.addIssue({
            message: "Password must match",
            code: "custom",
            path: ["password"]

        })
        ctx.addIssue({
            message: "Password must match",
            code: "custom",
            path: ["password_confirm"]

        })

    }


})
const updatephone = z.object({
    phone: z.string().min(1).max(15, { message: "Max Numbers 15" }).trim()
})
const upgradeAccount = z.object({
    kra_pin: z.string({ required_error: "Kra is required" }).max(20),
    id_no: z.string({ required_error: " Id is required" }).max(10)
})
export const actions: Actions = {
    changepassword: async (event) => {

        const data = Object.fromEntries(await event.request.formData())

        const url = PUBLIC_BACKEND_URL + 'users/update'
        try {
            const { password_confirm, ...rest } = changePasssword.parse(data);




            const res = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(rest),
                headers: {
                    'content-type': "application/json",
                    Authorization: 'Bearer ' + event.locals.token
                }
            })

            if (res.status === 204) {
                setFlash({ type: 'success', message: "Update Success" }, event);
                return
            }
            const dt = await res.json()
            if (dt.status === 401) {
                setFlash({ type: 'error', message: 'Session timout Please Login' }, event);
                throw redirect(302, "/auth?signin")

            }
            setFlash({ type: 'error', message: dt?.details }, event);
            return fail(res.status)



        } catch (err: any) {
            if (err.flatten) {
                const { fieldErrors: errors } = err.flatten()

                const { password, password_confirm, ...rest } = data;

                setFlash({ type: 'error', message: 'Form Error' }, event);
                return { data: rest, errors }
            }

            setFlash({ type: 'error', message: 'Update Error' }, event);
            return fail(400)


        }




    },
    updatephone: async (event) => {

        const data = Object.fromEntries(await event.request.formData()) as { phone: string }

        const url = PUBLIC_BACKEND_URL + 'users/update'
        try {
            const phone = updatephone.parse(data);




            const res = await fetch(url, {
                method: "PUT",
                body: JSON.stringify(phone),
                headers: {
                    'content-type': "application/json",
                    Authorization: 'Bearer ' + event.locals.token
                }
            })

            if (res.status === 204) {
                setFlash({ type: 'success', message: "Update Success" }, event);
                return
            }

            const dt = await res.json()
            if (dt.status === 401) {
                setFlash({ type: 'error', message: 'Session timout Please Login' }, event);
                throw redirect(302, "/auth?signin")

            }
            setFlash({ type: 'error', message: dt?.details }, event);
            return fail(res.status)



        } catch (err: any) {

            if (err.flatten) {
                const { fieldErrors: errors } = err.flatten()


                setFlash({ type: 'error', message: 'Form Error' }, event);
                return { data, errors }
            }

            setFlash({ type: 'error', message: 'Update Error' }, event);
            return fail(400)


        }




    },
    upgradeaccount: async (event) => {

        const data = Object.fromEntries(await event.request.formData())

        const url = PUBLIC_BACKEND_URL + 'users/update'
        try {
            const up = upgradeAccount.parse(data);

            console.log(up);


            const res = await fetch(url, {
                method: "PUT",
                body: JSON.stringify({ ...up, is_landlord: true }),
                headers: {
                    'content-type': "application/json",
                    Authorization: 'Bearer ' + event.locals.token
                }
            })

            if (res.status === 204) {
                setFlash({ type: 'success', message: "Update Success" }, event);
                return
            }
            const dt = await res.json()
            if (dt.status === 401) {
                setFlash({ type: 'error', message: 'Session timout Please Login' }, event);
                throw redirect(302, "/auth?signin")

            }
            setFlash({ type: 'error', message: dt?.details }, event);
            return fail(res.status)



        } catch (err: any) {
            if (err.flatten) {
                const { fieldErrors: errors } = err.flatten()



                setFlash({ type: 'error', message: 'Form Error' }, event);
                return { data, errors }
            }

            setFlash({ type: 'error', message: 'Update Error' }, event);
            return fail(400)


        }




    },

};