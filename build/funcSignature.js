"use strict";
var helloCity;
helloCity = function (city, hello) {
    console.log("".concat(hello, " to ").concat(city));
};
helloCity("MPLS", "hello");
var add;
add = function (n, n2) {
    return n + n2;
};
console.log(add(1, 2));
var c;
c = function (obj1) {
    console.log("".concat(obj1.cname, " is ").concat(obj1.index));
};
var country2;
c({ cname: "USA", index: 1 });
