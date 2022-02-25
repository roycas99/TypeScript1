import {Invoice} from './classess/invoiceClass.js';
import { Payment } from './classess/paymentClass.js';
import  {HasFormat} from './interfaces/hasFormat';


// let docOne: HasFormat;
// let docTwo: HasFormat;

// docOne = new Invoice("Ahmed","Web",33);
// docTwo = new Payment("Ang2","app",44);

// let docs: HasFormat[] =[];

// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);



// intialization
const invOne = new Invoice("Joyce","lockChange",30);
const invTwo = new Invoice("jama2","light bulb",10);

// making object array for Invoice

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// because it is public i can change joyce to sid
invOne.client ="Sid";

// to see everything in the array
// invoices.forEach(inv => {
//     console.log(inv.format(), inv.details);
    
// })



const form= document.querySelector('.new-item-form') as HTMLFormElement;



// inputs
 const type= document.querySelector('#type')as HTMLSelectElement;
 const tofrom= document.querySelector('#tofrom')as HTMLInputElement;
 const details= document.querySelector('#details')as HTMLInputElement;
 const amount= document.querySelector('#amount')as HTMLInputElement;



// listening form as submitted
 form.addEventListener('submit',(e:Event)=>{
     e.preventDefault();

let doc:HasFormat;
if(type.value === 'invoice'){
    doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);

}else{
    doc=new Payment(tofrom.value,details.value,amount.valueAsNumber);

}
     console.log(doc);
     
 })