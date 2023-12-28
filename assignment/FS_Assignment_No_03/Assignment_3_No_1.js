var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.Number1 = A;
        this.Number2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Ans;
        Ans = this.Number1 + this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Subtraction = function () {
        var Ans;
        Ans = this.Number1 - this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Ans;
        Ans = this.Number1 * this.Number2;
        return Ans;
    };
    Arithmetic.prototype.Division = function () {
        var Ans;
        Ans = this.Number1 / this.Number2;
        return Ans;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(11, 10);
var obj2 = new Arithmetic(50, 25);
console.log(obj1.Number1);
console.log(obj1.Number2);
console.log(obj2.Number1);
console.log(obj2.Number2);
var Result = 0;
Result = obj1.Addition();
console.log("Addition of obj1 : " + Result);
Result = obj2.Addition();
console.log("Addition of obj2 : " + Result);
Result = obj1.Subtraction();
console.log("Subtraction of obj1 : " + Result);
Result = obj2.Subtraction();
console.log("Subtraction of obj2 : " + Result);
Result = obj1.Multiplication();
console.log("Multiplication of obj1 : " + Result);
Result = obj2.Multiplication();
console.log("Multiplication of obj2 : " + Result);
Result = obj1.Division();
console.log("Division of obj1 : " + Result);
Result = obj2.Division();
console.log("Division of obj2 : " + Result);
