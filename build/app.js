import { Invoice } from './classess/invoiceClass.js';
import { Payment } from './classess/paymentClass.js';
var invOne = new Invoice("Joyce", "lockChange", 30);
var invTwo = new Invoice("jama2", "light bulb", 10);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Sid";
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
