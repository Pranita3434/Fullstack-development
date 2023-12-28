
function CheckEven(no : number) : boolean
{
    var iDigit : number = 0;
    var Num : number = no;
    var Temp : number = 0;
    
    while(no != 0)
    {
        
        iDigit = no % 10;
        Temp = Temp + (iDigit * iDigit * iDigit);
        no =  Math.floor(no / 10);
    }
    
   
    if(Num == Temp)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

var Value : number = 153;
var Result : boolean = false;

Result = CheckEven(Value);

if(Result == true)
{
    console.log("It is Armstrong Number");
}
else{
    console.log("IT is NOT Armstrong Number");
}