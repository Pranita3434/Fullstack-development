
function DisplayFibo(Value1 : number) : void
{
    var No1 : number = 1;
    var No2 : number = 1;

    var No3 : number = 0;
    No3 = No1 + No2;
    console.log(" "+No1);
    console.log(" "+No2);
    console.log(" "+No3);

    while(No3 != Value1)
    {
        No1 = No2;
        No2 = No3;
        No3 = No1 + No2;
        console.log(" "+No3);
    }   
}

var No1 : number = 21;
DisplayFibo(No1);