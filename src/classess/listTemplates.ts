import { Tenant } from "../interfaces/tenantFormat";

export class ListTemplates {
    constructor(private container: HTMLUListElement){

    }
    render(item: Tenant,heading:string, post: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.tenantfrm();
        li.append(p);
        if(post === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}