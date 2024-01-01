
import type { HouseFetch } from "$interface/house";
import { Utility } from "$utility";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { agencyInterface } from "$interface/api";

export const load: PageLoad = async ({ fetch, params }) => {

    const endPoint = `{
        agency(id: "${params.id}"){
            id
            name
            address
            website_url
            licence
            phone
            properties{
                id
                name
                photos
                additional_info
    
            }
            
        }
    }`
    const agency = await Utility.queryGaphql<{
        data: { agency: agencyInterface }, errors: [{
            message: string, extensions: {
                status: number
            }
        }]
    }>(fetch, endPoint)
    if (
        agency.errors
    ) {
        throw error(agency.errors[0].extensions.status, {
            message: agency.errors[0].message
        });
    }

    return {
        agency: agency.data.agency
    }


};