// long way

// const det1 = (user:{name:string | number, item: number}) =>{
//     console.log(`${user.name} says hello`);
    
// }

// short way

type stringOrnum = string | number;
type objectWithName= {name: stringOrnum, item:string};

const det2 = (user:objectWithName) =>{
    console.log(`${user.name} says hello`);
    
}

const user1: objectWithName = {name: "a",item: "h"};
det2(user1);