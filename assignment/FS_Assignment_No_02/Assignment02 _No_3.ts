

function Maximum(Arr : number[]):number
{
    var LargeNum: number = 0;
    var i : number = 0;
    var Num : number = 0;


    for(i =0 ; i< Arr.length; i++)
    { 
        Num = LargeNum;
        if(LargeNum < Arr[i])
        {
           LargeNum = Arr[i];
        }
         
    }
    return  Num;
}

var Value : number[] = [23, 89, 6, 80, 56, 45 , 32, 77];
var iRet : number = 0;

iRet = Maximum(Value);
console.log("Maximum Number is : " +iRet);
