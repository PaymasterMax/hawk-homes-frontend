import { fail, type Actions } from "@sveltejs/kit";
import { redirect } from 'sveltekit-flash-message/server'
import { setFlash, flashCookieOptions } from 'sveltekit-flash-message/server';
import type { PageServerLoad } from "./$types";
import { PUBLIC_BACKEND_URL } from "$env/static/public";
import { z } from "zod"
import jwt from "jsonwebtoken"
import type { User } from "$interface";
flashCookieOptions.secure = false
export const load: PageServerLoad = async (event) => {
    if (event.locals.user) {
        throw redirect(302, "/profile/settings")
    }
    const token = event.url.searchParams.get("token")
    if (token) {
        try {
            const verify = jwt.verify(token, "G,t3l.0@rw!VE_4&F*97")

            event.cookies.set("token", token, { secure: false, path: "/" })
            event.locals.user = verify as User;
            throw redirect(302, "/profile/settings")
        } catch (error) {


            throw redirect(302, "/profile/settings")
        }

    }




};

const loginSchema = z.object({
    email_addr: z.string({ required_error: "Email is required" }).min(0).max(64).email({ message: "Must be a valid email address" }),

    password: z.string({ required_error: "Password is required" }).min(6).max(64).trim(),

})
const registerSchema = z.object({
    email_addr: z.string({ required_error: "Email is required" }).min(0).max(64).email({ message: "Must be a valid email address" }),
    first_name: z.string({ required_error: "First name is required" }).min(1).max(12).trim(),
    last_name: z.string({ required_error: "LastName is required" }).min(1).max(12).trim(),
    kra_pin: z.string({ required_error: "Kra is required" }).optional().default(""),
    is_landlord: z.enum(['on', 'off']).optional().default("off"),
    phone: z.string({ required_error: "Phone Number is required" }).min(1).max(15).trim(),
    password: z.string({ required_error: "Password is required" }).min(6, { message: "Password must be atleast 6 chars" }).max(15, { message: "password must be less than 15 chars" }).trim(),
    password_confirm: z.string({ required_error: "Fill in password" }).min(1).trim(),
    id_no: z.string({ required_error: " Id is required" }).optional().default("0")
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
export const actions: Actions = {
    register: async (event) => {
        //incorrect
        const data = Object.fromEntries(await event.request.formData())

        const url = PUBLIC_BACKEND_URL + 'users/create'
        try {
            const rls = registerSchema.parse(data);

            const { password_confirm, is_landlord, id_no, ...rest } = rls

            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ ...rest, is_landlord: is_landlord === 'on' ? true : false, id_no: +id_no }),
                headers: {
                    'content-type': "application/json"
                }
            })
            const x = await res.json();

            if (x.status !== 201) {
                setFlash({ type: 'error', message: x.data[0].msg }, event);
                return fail(x.status)
            }
            setFlash({ type: 'success', message: "Registration Success" }, event);

        } catch (err: any) {
            if (err.flatten) {
                const { fieldErrors: errors } = err.flatten()

                const { password, password_confirm, ...rest } = data;
                setFlash({ type: 'error', message: 'Form Error' }, event);
                return { data: rest, errors }
            }
            setFlash({ type: 'error', message: 'Register Error' }, event);
            return fail(400)


        }


        throw redirect("/otp", { type: "success", message: "Registration Successful!Verify Account" }, event)


    },
    signin: async (event) => {

        const data = Object.fromEntries(await event.request.formData())
        const url = PUBLIC_BACKEND_URL + 'users/signin'
        try {

            const rls = loginSchema.parse(data)

            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ ...rls, phone: "1199999494" }),
                headers: {
                    'content-type': "application/json"
                }
            })
            const x = await res.json();

            if (x.status !== 200) {



                setFlash({ type: 'error', message: x.details }, event);
                return fail(x.status)


            }

            event.cookies.set("token", x.data?.accessToken, { secure: false, path: "/" })

            setFlash({ type: 'success', message: "login Success" }, event);



        } catch (err: any) {


            if (err.flatten) {
                const { fieldErrors: errors } = err.flatten()


                const { password, ...rest } = data;
                return { data: rest, errors }
            }

            setFlash({ type: 'error', message: 'Login error' }, event);



        }




        throw redirect("/add-listing", { type: "success", message: "Login Successful" }, event)


    }
};