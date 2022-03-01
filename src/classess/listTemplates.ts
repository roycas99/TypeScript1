import { Tenant } from "../interfaces/tenantFormat";

export class ListTemplates {
    constructor(private container: HTMLUListElement){

    }
    render(item: Tenant,heading:string,unit:number, comment:string,post: 'start' | 'end'){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = `${heading}/ #${unit}`
        li.append(h4);

        const h5 = document.createElement('h5');
        h5.innerText = item.tenantfrm();
        li.append(h5);
       
        const p = document.createElement('p');
        p.innerText = `${comment}`;
        li.append(p)

        if(post === 'start'){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }
    }
}