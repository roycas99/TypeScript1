"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    // variables
    // public  client: string;
    // readonly details: string;
    // private amount: number;  // private you cant access outside the class
    // constructor 
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // methods
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $ ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
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
