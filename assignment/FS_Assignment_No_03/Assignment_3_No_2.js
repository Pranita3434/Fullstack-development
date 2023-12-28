var Circle = /** @class */ (function () {
    function Circle(A, B) {
        if (B === void 0) { B = 3.14; }
        this.Radius = A;
        this.PI = B;
    }
    Circle.prototype.Area_of_Circle = function () {
        var Ans = 0;
        Ans = this.Radius * this.PI;
        return Ans;
    };
    return Circle;
}());
var obj1 = new Circle(10);
var obj2 = new Circle(20);
console.log(obj1.Radius);
console.log(obj2.Radius);
var Result = obj1.Area_of_Circle();
console.log("Area of Circle is : " + Result);
var Result = obj2.Area_of_Circle();
console.log("Area of Circle is : " + Result);
