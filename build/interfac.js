"use strict";
var me = {
    name: 'Ali',
    speak: function (lan) {
        console.log("speaks ".concat(lan));
    }
};
console.log(me);
var sayPerson = function (someone) {
    console.log(someone.name);
};
sayPerson(me);
