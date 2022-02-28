import { Tenant } from "../interfaces/tenantFormat.js";


export class ABuilding implements Tenant{
    // variables
    // public  client: string;
    // readonly details: string;
    // private amount: number;  // private you cant access outside the class


// constructor 

constructor(
    
    public fname: string,
     readonly lname: string,
     private unit: number,
)
{}

// methods

tenantfrm(){
    return `${this.fname}  ${this.lname} is in   ${this.unit} unit`;
}

}