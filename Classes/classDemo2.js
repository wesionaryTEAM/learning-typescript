var Cars = /** @class */ (function () {
    function Cars(name, model, isElectric) {
        this.name = name;
        this.model = model;
        this.isElectric = isElectric;
    }
    Cars.prototype.displayInfo = function () {
        console.log(this.name + " " + this.model + " " + this.isElectric);
    };
    return Cars;
}());
var car = new Cars("Toyota", "Yaris", false);
car.displayInfo();
