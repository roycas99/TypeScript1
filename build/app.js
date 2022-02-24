import { Invoice } from './classess/class.js';
var invOne = new Invoice("Joyce", "lockChange", 30);
var invTwo = new Invoice("jama", "light bulb", 10);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Sid";
invoices.forEach(function (inv) {
    console.log(inv.format(), inv.details);
});
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
