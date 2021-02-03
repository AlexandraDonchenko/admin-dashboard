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
export interface Users {
    users: string[]; 
}
