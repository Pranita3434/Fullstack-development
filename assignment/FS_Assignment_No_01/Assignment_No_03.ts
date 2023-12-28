
function DisplayFactoer(Value1 : number) : void
{
    var Result : number = 0;
    var iCnt : number = 0;

    for(iCnt = 1; iCnt<= Value1/2 ; iCnt++)
    {
       if((Value1 % iCnt) == 0)
       {
        console.log(" " +iCnt);
       }
    }
}

var No1: number = 20;

DisplayFactoer(No1);



