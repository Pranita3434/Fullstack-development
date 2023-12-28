
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
class CircleX  extends Circle 
{
    Circumference():number
    {
        var Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

var obj1 = new CircleX(10);
var obj2 = new CircleX(22);

console.log(obj1.Radius);
console.log(obj2.Radius);

var Result = obj1.Area_of_Circle();
console.log("Area of Circle of obj1 : "+Result);

var Result = obj1.Circumference();
console.log("Circumference of obj1 is : "+Result);

var Result = obj2.Area_of_Circle();
console.log("Area of Circle of obj2 : "+Result);

var Result = obj2.Circumference();
console.log("Circumference of obj1 is : "+Result);



