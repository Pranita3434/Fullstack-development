
class Circle
{
    public Radius : number;
    public PI : number;

    constructor(A: number, B :number = 3.14)
    {
        this.Radius = A;
        this.PI = B;
    }

    Area_of_Circle(): number
    {
        var Ans : number = 0;
        Ans = this.Radius * this.PI;
        return Ans;
    }
}

var obj1 = new Circle(10);
var obj2 = new Circle(20);

console.log(obj1.Radius);
console.log(obj2.Radius);

var Result = obj1.Area_of_Circle();
console.log("Area of Circle is : "+Result);

var Result = obj2.Area_of_Circle();
console.log("Area of Circle is : "+Result);