
export interface commonProp { id: string, name: string }
export interface ApiResponse<T> {
    title: string;
    status: number;
    details: string;
    data: {
        data: T[];
        count: number;
    };
    type: string;
}
export interface agencyInterface {
    date_updated: Date;
    website_url: string;
    date_added: Date;
    address: string;
    licence: string;
    phone: string;
    name: string;
    id: string;
    properties: PropertyInterface[]
}
export interface HouseInterface {
    id: string;
    cost: number;
    for_sale: boolean;
    total_available: number;
    additional_info: string | null;
    date_added: Date;
    date_updated: Date;
    features: commonProp[];
    photos: string[];
    category: commonProp;
    property: PropertyInterface;
}
export interface PropertyInterface {
    id: string;
    name: string;
    address: string;
    coords: Point;
    nearest_town: string;
    land_size: number | null;
    year_built: number | null;
    photos: string[];
    type: commonProp;
    additional_info: string | null;
    features: commonProp[];
    review: ReviewInterface[];
    owner: UserInterface;
    houses: HouseInterface[];
    agency: agencyInterface;
}


interface ReviewInterface {
    id: string;
    review: string;
    rating: number | null;
    date_created: Date;
    date_updated: Date;
    owner: UserInterface;
    property: PropertyInterface;
}
export type Point = {
    type: "Point";
    coordinates: number[];
};
interface UserInterface {
    uid: string;
    first_name: string;
    last_name: string;
    active: boolean;
    disabled: boolean;
    verified: boolean;
    password: string;
    date_added: Date;
    refToken: string | null;
    perm: PermInterface;
    profile: ProfileInterface;
    acc_user: ActivateAccount | null;
    pass_reset: PasswordReset | null;
    properties: PropertyInterface[];
    agency: agencyInterface | null;
    review: ReviewInterface[];
}
interface PermInterface { id: string, role: string, user: UserInterface }
interface ProfileInterface {
    id: string;

    email_addr: string;
    phone: string;
    id_no: number | null;
    kra_pin: string | null;
    user: UserInterface;
}
type ActivateAccount = {
    id: string
    otp: number
    user: UserInterface
}
type PasswordReset = {
    id: string

    user: UserInterface
}
