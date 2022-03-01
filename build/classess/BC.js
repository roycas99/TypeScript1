var BCTenants = (function () {
    function BCTenants(fname, lname, unit) {
        this.fname = fname;
        this.lname = lname;
        this.unit = unit;
    }
    BCTenants.prototype.tenantfrm = function () {
        return "".concat(this.fname, "  ").concat(this.lname, " is in  ").concat(this.unit, " unit");
    };
    return BCTenants;
}());
export { BCTenants };
