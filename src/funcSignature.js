// 1. void signature
var helloCity;
// now let use the function following the signature or blue print
helloCity = function (city, hello) {
    console.log("".concat(hello, " to ").concat(city));
};
// provoke func
helloCity("MPLS", "hello");
// 2. return signatire
var add;
// create the func
add = function (n, n2) {
    return n + n2;
};
// provoke func
console.log(add(1, 2));
// object argument sig
var c;
c = function (obj1) {
    console.log("".concat(obj1.cname, " is ").concat(obj1.index));
};
var country2;
c({ cname: "USA", index: 1 });
