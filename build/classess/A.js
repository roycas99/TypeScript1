var ABuilding = (function () {
    function ABuilding(fname, lname, unit) {
        this.fname = fname;
        this.lname = lname;
        this.unit = unit;
    }
    ABuilding.prototype.tenantfrm = function () {
        return "".concat(this.fname, "  ").concat(this.lname, " is in   ").concat(this.unit, " unit");
    };
    return ABuilding;
}());
export { ABuilding };
