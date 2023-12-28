

function CheckString(Arr : string[]) : boolean
{
    var i : number = 0;
    var chk : number = 0;

    for(i = 0; i < Arr.length; i++)
    {
        if("Marvellous" == (Arr[i]))
        {
            chk = 1;
        }
    }

    if(chk == 1)
    {
        return true;
    }
    else
    {
        return false;
    }    
}

var Arr : string[] = ["Pune", "Kothrud" , "Marvellous", "Infosystem"];


var i : number = 0;
var Result : boolean = false;

Result = CheckString(Arr);

if(Result == true)
{
    console.log("String Contains Marvellous in it");
}
else{
    console.log("String is Not Contains Marvellous in it");
}




