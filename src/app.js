"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invoiceClass_js_1 = require("./classess/invoiceClass.js");
var paymentClass_js_1 = require("./classess/paymentClass.js");
// let docOne: HasFormat;
// let docTwo: HasFormat;
// docOne = new Invoice("Ahmed","Web",33);
// docTwo = new Payment("Ang2","app",44);
// let docs: HasFormat[] =[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// intialization
var invOne = new invoiceClass_js_1.Invoice("Joyce", "lockChange", 30);
var invTwo = new invoiceClass_js_1.Invoice("jama2", "light bulb", 10);
// making object array for Invoice
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// because it is public i can change joyce to sid
invOne.client = "Sid";
// to see everything in the array
// invoices.forEach(inv => {
//     console.log(inv.format(), inv.details);
// })
var form = document.querySelector('.new-item-form');
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// listening form as submitted
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new invoiceClass_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new paymentClass_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
