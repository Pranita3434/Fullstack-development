var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return CircleX;
}(Circle));
var obj1 = new CircleX(10);
var obj2 = new CircleX(22);
console.log(obj1.Radius);
console.log(obj2.Radius);
var Result = obj1.Area_of_Circle();
console.log("Area of Circle of obj1 : " + Result);
var Result = obj1.Circumference();
console.log("Circumference of obj1 is : " + Result);
var Result = obj2.Area_of_Circle();
console.log("Area of Circle of obj2 : " + Result);
var Result = obj2.Circumference();
console.log("Circumference of obj1 is : " + Result);
