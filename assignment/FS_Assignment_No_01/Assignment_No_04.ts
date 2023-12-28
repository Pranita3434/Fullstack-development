

function ChkPrime(Value1 : number) : boolean
{
    var iCnt : number = 0;

    for(iCnt = 2; iCnt <= (Value1/2) ; iCnt++)
    {
       if((Value1 % iCnt) == 0)
       {
           return false;
       }
    }
    return true;
}

var No1 : number = 111;
var bRet : boolean = false;
bRet = ChkPrime(No1);

if(bRet == true)
{
    console.log("IT Is Prime Number");
}
else
{
    console.log("IT Is NOT Prime Number");
}
