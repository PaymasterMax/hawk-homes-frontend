import type { HouseFetch } from "$interface/house";
import { Utility } from "$utility";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
import type { PropertyInterface, agencyInterface } from "$interface/api";
import { houseQuery } from "$helpers";

export const load: PageLoad = async ({ fetch, params }) => {
    const endPoint = `{
        property(id: "${params.id}"){
           name
        }

            
        
    }`;

    let props = await Utility.queryGaphql<{
        data: { property: PropertyInterface }, errors: [{
            message: string, extensions: {
                status: number
            }
        }]
    }>(fetch, endPoint);

    if (
        props.errors
    ) {
        throw error(props.errors[0].extensions.status, {
            message: props.errors[0].message
        });
    }


    return {
        id: params.id,
        props: props.data.property
    }


};