export interface Theme {
    theme: String
}
export interface Action {
    type:string,
    payload:any
}
export interface Logged {
    logged: boolean;
}
export interface Clicked {
    clicked: string;
}
export interface User {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    isActive: Boolean,
    group: string
}
export interface Users {
    users: User[];
}
