

function Maximum(Arr : number[]):number
{
    var LargeNum: number = 0;
    var i : number = 0;


    for(i =0 ; i< Arr.length; i++)
    { 
        if(LargeNum < Arr[i])
        {
           LargeNum = Arr[i];
        }
    }
    return  LargeNum;
}

var Value : number[] = [23, 89, 6, 29, 56, 45 , 77, 32];
var iRet : number = 0;

iRet = Maximum(Value);
console.log("Maximum Number is : " +iRet);
