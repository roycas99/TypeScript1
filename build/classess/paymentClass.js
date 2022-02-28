var Payment = (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed $ ").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
export { Payment };
