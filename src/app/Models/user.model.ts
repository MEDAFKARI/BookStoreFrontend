import { Role } from "./role.enum";

export class User {
    id:number |undefined;
    username:string="";
    name:string="";
    password:string="";
    token:string="";
    role:Role = Role.USER;
}