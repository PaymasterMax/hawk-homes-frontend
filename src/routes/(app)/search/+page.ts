
import { houseQuery } from "$helpers";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {

    const type = url.searchParams.get("type")
    // const loc = url.searchParams.get("loc")
    const cost = url.searchParams.get("cost")
    const filter = url.searchParams.get("filter")


    const query = `
    {
houses(cost:{max:${cost}},type:["${type}"]) {
${houseQuery}
}
`;


    return {
        query,
        filter

    }


};