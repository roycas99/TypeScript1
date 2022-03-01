import { BCTenants } from './classess/BC.js';
import { ListTemplates } from './classess/listTemplates.js';
import { ABuilding } from './classess/A.js';
var form = document.querySelector('.new-item-form');
var building = document.querySelector('#building');
var fname = document.querySelector('#fname');
var lname = document.querySelector('#lname');
var unit = document.querySelector('#unit');
var comment = document.querySelector('#comment');
var ul = document.querySelector('ul');
var list = new ListTemplates(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var resident;
    if (building.value === '31-B' || "31-C") {
        resident = new BCTenants(fname.value, lname.value, unit.valueAsNumber);
    }
    else {
        resident = new ABuilding(fname.value, lname.value, unit.valueAsNumber);
    }
    list.render(resident, building.value, unit.valueAsNumber, comment.value, 'end');
});
