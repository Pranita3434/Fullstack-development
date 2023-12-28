
function Summation(Arr : number[]):number
{
    var Sum: number = 0;
    var i : number = 0;

    for(i =0 ; i< Arr.length; i++)
    { 
        Sum = Arr[i] + Sum;
    }
    return  Sum;
}

var Value : number[] = [23, 6, 7, 4, 5, 7];
var iRet : number = 0;

iRet = Summation(Value);
console.log("Addition is : " +iRet);
