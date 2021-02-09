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
export interface Log{
    id:number,
    enteredBy: number,
    enteredDoor: number,
    date: Date
}
export interface Logs {
    logs: Log[];
}

export interface DialogBlur {
  status: String;
}
export interface Issue {
    type: string,
    active: boolean,
    reportedBy: string
}
export interface Issues {
    issues: Issue[]
}

export interface DialogStatus {
  users: String;
  groups: String;
  doors: String;
  logs: String;
  issues: String;
  settings: String;
}
export interface Admin {
    firstName: string,
    lastName:string,
    email: string,
    password: string,
    theme: string
}
