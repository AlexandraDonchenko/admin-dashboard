/* eslint-disable camelcase */

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
export interface Group {
    id: number,
    groupName: string,
    description, string,
    access_from_hour: number,
    access_to_hour: number
}
export interface Groups {
    groups: Group[];
}
export interface Door {
    id: number,
    name:string,
    endPoint: string
}
export interface Doors{
    doors: Door[]
}
