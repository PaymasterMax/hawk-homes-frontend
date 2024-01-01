import { fail, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { PUBLIC_BACKEND_URL } from "$env/static/public";
import { Utility } from "$utility";

export const POST: RequestHandler = async ({ request, locals, cookies }) => {
    const payload = await request.json()

    const property = payload['property'];
    const url = PUBLIC_BACKEND_URL + `properties/${property}/houses/create`;



    try {

        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + locals.token }
        })
        const dt = await res.json()

        if (dt.status === 201) {

            return json({ status: 201 })
        }
        else {
            if (dt.status === 401) {
                locals.token = null
                locals.user = undefined
                cookies.delete("token", { secure: false })

            }
            return json({ status: dt.status, message: dt.details })
        }

    } catch (error) {

        return json({ status: 500 })
    }



};


//update listing
export const PUT: RequestHandler = async ({ request, locals, cookies }) => {
    const payload = await request.json()



    const property = payload['property'];
    const { id, ...rest } = payload
    const url = PUBLIC_BACKEND_URL + `properties/${property}/houses/update/${id}`;

    try {
        const res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(rest),
            headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + locals.token }
        })
        if (res.status === 204) {

            return json({ status: 201, message: "Successful Updated" })

        }

        const dt = await res.json()
        if (dt.status === 401) {
            locals.token = null
            locals.user = undefined
            cookies.delete("token", { secure: false })

        }

        return json({ status: dt.status, message: dt.details })
    } catch (error) {

        return json({ status: 500 })
    }




};


//update listing
export const DELETE: RequestHandler = async ({ request, locals, cookies }) => {
    const payload: {
        propId: string;
        hseId: string;
        photoIds: string[];
    } = await request.json()
    const url = PUBLIC_BACKEND_URL +
        `properties/${payload.propId}/houses/delete/${payload.hseId}`;

    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + locals.token
        }
    });
    if (res.status !== 204) {
        const dt = await res.json()
        if (dt.status === 401) {
            locals.token = null
            locals.user = undefined
            cookies.delete("token", { secure: false })

        }
        return json({ status: dt.status, message: dt.details })
    }
    await Utility.DeletePhotos(payload.photoIds)
    return json({ status: res.status, message: "success" })






};