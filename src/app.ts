import {BCTenants} from './classess/BC.js';
import { ListTemplates } from './classess/listTemplates.js';
import { ABuilding } from './classess/A.js';
//import  {HasFormat} from './interfaces/hasFormat';
import { Tenant } from './interfaces/tenantFormat.js';




const form= document.querySelector('.new-item-form') as HTMLFormElement;



// inputs
 const building= document.querySelector('#building')as HTMLSelectElement;
 const fname= document.querySelector('#fname')as HTMLInputElement;
 const lname= document.querySelector('#lname')as HTMLInputElement;
 const unit= document.querySelector('#unit')as HTMLInputElement;

 // text-area
 const comment = document.querySelector('#comment') as HTMLTextAreaElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul);

// listening form as submitted
 form.addEventListener('submit',(e:Event)=>{
     e.preventDefault();

let resident :Tenant;
if(building.value === '31-B' || "31-C"){
    resident = new BCTenants (fname.value,lname.value,unit.valueAsNumber);

}else{
    resident=new ABuilding(fname.value,lname.value,unit.valueAsNumber);

}
   list.render(resident,building.value,unit.valueAsNumber,comment.value,'end');
     
 })