
function AreaOfCircle(Value1 : number, Value2 : number) : number
{
    var Result : number = 0;
    Result = Value1 * Value2;
    return Result;
}

var No1: number = 5;
var PI: number = 3.14;

var Ans : number = 0;

Ans = AreaOfCircle(No1, PI);

console.log("Area Of Circle is " +Ans);

