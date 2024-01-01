

import type { PageLoad } from "./$types";


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
    // const agency = await Utility.queryGaphql<{
    //     data: { agency: agencyInterface }, errors: [{
    //         message: string, extensions: {
    //             status: number
    //         }
    //     }]
    // }>(fetch, endPoint)
    // if (
    //     agency.errors
    // ) {
    //     throw error(agency.errors[0].extensions.status, {
    //         message: agency.errors[0].message
    //     });
    // }

    return {
        agency: ""
    }


};