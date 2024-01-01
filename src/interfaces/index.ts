import type { Point, commonProp } from "./api";
import type { HouseStatus } from "./house";



export interface responseInterface {
    status: number;
    details?: string;
    type: string;
    title: string;
    data?: any;
}
export enum roleInterface {
    Agent = 'Agent',
    Admin = 'Admin',
    USER = 'User',
}

export interface userProfileInterface {
    email_addr: string;
    avatar: string;
    phone?: string;
    kra_pin?: string;
    id_no?: number;
    id?: string;
}

interface commonUser {
    first_name: string;
    last_name: string;
}

export interface emailInterface
    extends commonUser,
    Pick<userProfileInterface, 'email_addr'> {
    template: string;
    subject: string;
}
interface Perm { id: string, role: string, user: string }
export interface userInterface extends commonUser {
    profile: userProfileInterface;
    is_landlord: boolean;
    password?: string;
    perm: Perm;
    uid: string;
}

export interface smsInterface extends Pick<userProfileInterface, 'phone'> {
    msg: string;
}

export interface min_max_builtInterface {
    min?: number | undefined;
    max?: number | undefined;
}

export interface handleFilesInterface {
    errorsFromMoving: Array<any>;
    fileNames: Array<any>;
}

export interface statusTypeInterface {
    status: number;
    type: string;
    title: string;
}

export interface coordsInterface {
    long: number;
    lat: number;
}
export interface formInputData {
    label: string;
    key: string;
    textarea?: boolean;
    date?: boolean;
    order?: string;
    type?: number
    options?: (string | number)[]
    placeholder?: string
}

export type Payloads = any



export enum dataOrderingEnum {
    Ascending = 'ASC',
    Descending = 'DESC',
}

export enum propertyTypeEnum {
    Family = 'Family',
}

export interface paginationInterface {
    page: number;
    limit: number;
}

// export interface propertyFilterInterface
//     extends paginationInterface,
//     Omit<propertyInterface, 'year_built'> {
//     year_built: min_max_builtInterface;
//     sort: dataOrderingEnum;
//     // radius
//     radius: number;
//     currLocation: {
//         long: number;
//         lat: number;
//     };
// }
// export interface HouseStatusInterface extends propertyFilterInterface {
//     total_available: number;
//     for_sale: boolean;
//     category: string;
//     cost: {
//         max: number;
//         min: number;
//     };
// }

export interface otpInterface {
    otp?: number;
}

export type controllerFunctionInterface = (
    params: controllerInterface
) => Promise<any>;

export interface controllerInterface {
    next?: any;
    req: Request;
    res: Response;
}
export interface addListPayload {

    category: string,

    additional_info: string,
    features: string[],

    photos: File[]
    cost: number
    tags: string[]
    total_available: number
    status: HouseStatus
    property: string
    id?: string

}

export interface User {
    uid: string;
    first_name: string;
    last_name: string;
    verified: boolean;
    profile: Profile;
    perm: Perm;
    iat: number;
    exp: number;
}

interface Perm {
    role: string;
}

interface Profile {

    email_addr: string;
    phone: string;
}