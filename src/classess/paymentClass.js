"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    // variables
    // public  client: string;
    // readonly details: string;
    // private amount: number;  // private you cant access outside the class
    // constructor 
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // methods
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed $ ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
exports.Payment = Payment;
