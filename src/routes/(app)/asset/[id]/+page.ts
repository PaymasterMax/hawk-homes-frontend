import type { HouseFetch } from "$interface/house";
import { Utility } from "$utility";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {

    const endPoint = `{
        house(id:"${params.id}"){
             id,
             property{
                 name,
                 owner {
                     first_name,
                     last_name,
                     profile{ email_addr, phone }
                 },
                 address,
                 agency { name
             address 
            id
            
            }
             nearest_town,
             land_size,
             year_built,features{name}
             type { name }
             },
             cost,
             category{id,name},
             status,
             features{id,name},
             date_added,
             additional_info,
             photos
         }
       }`
    const house = await Utility.queryGaphql<{
        data: { house: HouseFetch }, errors: [{
            message: string, extensions: {
                status: number
            }
        }]
    }>(fetch, endPoint)

    if (
        house.errors
    ) {
        throw error(house.errors[0].extensions.status, {
            message: house.errors[0].message
        });
    }

    return {
        h: house
    }


};