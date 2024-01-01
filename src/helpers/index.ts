import type { formInputData } from "$interface";
import { HouseStatus, type HouseFetch } from "$interface/house";
import { Utility } from "$utility";
import { z } from "zod";

export const links = [
  {
    href: "",
    text: "Home"
  },
  {
    href: "about",
    text: "About"
  },
  {
    href: "listings",
    text: "Listings"
  },
  {
    href: "search",
    text: "Search"
  },
  {
    href: "blog",
    text: "Blog"
  },
  {
    href: "contact",
    text: "Contact"
  }

];
export const about = [
  "Property listings: We have a comprehensive database of properties for sale and rent in Kenya, including apartments, houses, land, and commercial properties.",
  "Search tools: Our easy-to-use search tools make it easy to find the perfect property for your needs. You can filter by location, property type, price range, and other criteria.",
  "Real estate agents: Our team of experienced real estate agents is here to help you every step of the way, from finding the right property to closing the deal.",

]
export const services = [

  {
    icon: "icon",
    init: { opacity: 0, x: -20 },
    anim: { opacity: 1, x: 0 },
    trn: {
      duration: 1,
      delay: 0.5,

    },
    name: "Buying",
    desc: "Our experienced agents cater to first-time buyers and seasoned investors alike. We tailor property searches to your budget and lifestyle, arrange viewings, and negotiate the best deals for your ideal property.",



  },
  {
    icon: "icon-1",
    init: { opacity: 0, y: 20, scale: 0 },
    anim: { opacity: 1, y: 0, scale: 1 },
    trn: {
      duration: 1,
      delay: 0.6,
      type: 'spring',
      stiffness: 200,
      damping: 20
    },
    name: "selling",
    desc: "If you're selling your property, we'll maximize your price. We assess its market value, create a marketing strategy, and manage all the paperwork and negotiations to secure the best deal for you."


  },
  {
    icon: "icon-2",
    init: { opacity: 0, x: 20 },
    anim: { opacity: 1, x: 0 },
    trn: {
      duration: 1,
      delay: 0.5,

    },
    name: "Renting",
    desc: "Searching for a rental? Discover your ideal home with us. Our listings include apartments, houses, and commercial spaces to fit your budget and location preferences."


  },


]


//add listing Form

export const addList: formInputData[] = [



  {
    label: "Total Available",
    type: 0,
    placeholder: "Realtors Investors.",
    key: "total_available"

  },
  {
    label: "Cost",
    type: 0,
    placeholder: "Realtors Investors.",
    key: "cost"

  }


]
export const nairobiConstituencies = [
  "Kasarani",
  "Roysambu",
  "Ruaraka",
  "Embakasi North",
  "Embakasi Central",
  "Embakasi East",
  "Embakasi South",
  "Embakasi West",
  "Makadara",
  "Kamukunji",
  "Starehe",
  "Mathare",
  "Langata",
  "Kibra",
  "Dagoretti North",
  "Dagoretti South",
  "Westlands"
];


//a payload validation schema to check before the user adds a listing
export const addPayloadSchema = z.object({
  category: z.string().trim().refine((value) => value !== "default", {
    message: "Please Select a category!",
  }),
  additional_info: z
    .string()
    .min(300, { message: 'Description min words is 50.' })
    .max(1200, { message: 'Description max words is 200.' })
    .trim(),
  features: z.string().array().nonempty({ message: 'Add Atleast One feature' }),
  status: z.nativeEnum(HouseStatus).refine((value) => value !== "All", {
    message: "Please Pick a Status!",
  }),
  cost: z.number().min(3500),
  photos: z.array(z.instanceof(File)).min(3, { message: 'Minumum is 3 photos' }).max(15, { message: 'maximum is 15 photos' }),
  tags: z.string().array(),
  total_available: z.number().min(1).max(50),
  property: z.string().trim().refine((value) => value !== "default", {
    message: "Choose Property!",
  })
})
const { photos, ...rest } = addPayloadSchema.shape
export const updatePayloadSchema = z.object(rest)

//common house query to fetch houses
export const houseQuery = `property {
  name,
  address,
  owner{ first_name,last_name }
  id
  land_size
  nearest_town
  agency{name}
  year_built,
  type{id,name}
},
status,
id
additional_info
cost
photos
category{
name
}

}`

//common houses fetch
export const fetchHouses = () => {
  const house = `	{
    houses{
      ${houseQuery}
      
         
   } `;
  type houses = { data: { houses: HouseFetch[] } };
  return Utility.queryGaphql<houses>(fetch, house);
}