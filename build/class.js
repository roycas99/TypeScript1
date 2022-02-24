"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Joyce", "lockChange", 30);
const invTwo = new Invoice("jama", "light bulb", 10);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Sid";
invoices.forEach(inv => {
    console.log(inv.format(), inv.details);
});
