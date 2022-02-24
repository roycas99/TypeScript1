import {Invoice} from './classess/class.js'

// intialization
const invOne = new Invoice("Joyce","lockChange",30);
const invTwo = new Invoice("jama","light bulb",10);

// making object array for Invoice

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

// because it is public i can change joyce to sid
invOne.client ="Sid";

// to see everything in the array
invoices.forEach(inv => {
    console.log(inv.format(), inv.details);
    
})



const form= document.querySelector('.new-item-form') as HTMLFormElement;



// inputs
 const type= document.querySelector('#type')as HTMLSelectElement;
 const tofrom= document.querySelector('#tofrom')as HTMLInputElement;
 const details= document.querySelector('#details')as HTMLInputElement;
 const amount= document.querySelector('#amount')as HTMLInputElement;



// listening form as submitted
 form.addEventListener('submit',(e:Event)=>{
     e.preventDefault();
     console.log(
         type.value,
         tofrom.value,
         details.value,
         amount.valueAsNumber
     );
     
 })