
import type { HouseFetch } from '$interface/house.js';

import { Utility } from '$utility';
import { error } from '@sveltejs/kit';


export const load = async ({ fetch, params }) => {


  const endPoint = `{
        house(id:"${params.id}"){
             
             property{
                 name,
                id
             },
             cost,
             category{id,name},
             status,
             features{id,name},
             
             additional_info,photos
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
    id: params.id, house
  }
};