export class Invoice {
    // variables
    // public  client: string;
    // readonly details: string;
    // private amount: number;  // private you cant access outside the class


// constructor 

constructor(
    
    public client: string,
     readonly details: string,
     private amount: number,
)
{}

// methods

format(){
    return `${this.client} owes $ ${this.amount} for ${this.details}`;
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