var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    StoreCustomer.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
        return true;
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName = val;
        },
        enumerable: false,
        configurable: true
    });
    return StoreCustomer;
}());
var shopper = new StoreCustomer("Shawn", "Wildermuth");
shopper.showName();
//# sourceMappingURL=main.js.map