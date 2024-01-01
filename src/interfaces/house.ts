import type { commonProp } from "./api";

export enum HouseStatus {
    all = "All",
    ForRent = "Rent",
    ForSale = "Sale",
    Sold = "Sold",
    Upcoming = "Upcoming",
    ForAuction = "Auction",





}
export interface HouseFetch {
    id: string;
    cost: number;
    status: HouseStatus;
    total_available: number;
    additional_info: string;
    date_added: string;
    date_updated: string;
    date_deleted?: any;
    features: commonProp[];
    photos: string[];
    category: Category;
    property: Property;
}
export interface PropertySearchFilter {
    location: string;
    cost: {
        max: number;
        min: number;
    };
    size: {
        max: number;
        min: number;
    };
    year_built: {
        max: number;
        min: number;
    };
    category: string;
    keyword: string;
    features: string[]; // Assuming features are strings7

    type: string,
    radius: string


}

interface Property {
    id: string;
    name: string;
    address: string;
    coords: Coords;
    nearest_town: string;
    land_size: number;
    year_built: number;
    photos: any[];
    type: Category;
    additional_info: string;
    features: commonProp[];
    owner: Owner;
    agency: Agency;
}

interface Agency {
    id: string;
    name: string;
    address: string;
    phone: string;
    website_url: string;
    licence: string;
    date_deleted?: any;
    date_added: string;
    date_updated: string;
}

interface Owner {
    uid: string;
    first_name: string;
    last_name: string;
    active: boolean;
    disabled: boolean;
    verified: boolean;
    date_added: string;
    profile: Profile;
}

interface Profile {
    id: string;

    email_addr: string;
    phone: string;
    id_no: number;
    kra_pin: string;
}

interface Coords {
    type: string;
    coordinates: number[];
}

interface Category {
    id: string;
    name: string;
}