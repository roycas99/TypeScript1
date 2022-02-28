// interface Declaration
// use the interface
var me = {
    name: 'Ali',
    speak: function (lan) {
        console.log("speaks ".concat(lan));
    }
};
// call it
console.log(me);
// use Interfereance as parameter in func
var sayPerson = function (someone) {
    console.log(someone.name);
};
sayPerson(me);
