//import {HasFormat} from '../interfaces/hasFormat.js' 
import { Tenant } from '../interfaces/tenantFormat.js';


export class BCTenants implements Tenant{
    // variables
    // public  client: string;
    // readonly details: string;
    // private amount: number;  // private you cant access outside the class


// constructor 

constructor(
    
    private fname: string,
    private lname: string,
    readonly unit: number,
   
)
{}

// methods

tenantfrm(){
    return `${this.fname}  ${this.lname} is in  ${this.unit} unit`;
}

}

// // intialization
// const invOne = new Invoice("Joyce","lockChange",30);
// const invTwo = new Invoice("jama","light bulb",10);

// // making object array for Invoice

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// // because it is public i can change joyce to sid
// invOne.client ="Sid";

// // to see everything in the array
// invoices.forEach(inv => {
//     console.log(inv.format(), inv.details);
    
// })