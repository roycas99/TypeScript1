// 1. void signature

let helloCity: (a: string, b:string) => void;

// now let use the function following the signature or blue print

helloCity= (city: string, hello: string) => {
    console.log(`${hello} to ${city}`)
    
}

// provoke func

helloCity("MPLS","hello");


// 2. return signatire
let add: (num1:number,num2:number) => number;
// create the func
add=(n:number,n2:number) => {
    return n+n2;
}
// provoke func
console.log( add(1,2));


// object argument sig
let c: (obj:{cname:string, index:number}) =>void;

c =(obj1:{cname:string, index:number})=>  {
console.log(`${obj1.cname} is ${obj1.index}`);

}
let country2: {cname:"USA",index:1};
c({cname:"USA",index:1});

