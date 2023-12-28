function CheckString(Arr) {
    var i = 0;
    var chk = 0;
    for (i = 0; i < Arr.length; i++) {
        if ("Marvellous" == (Arr[i])) {
            chk = 1;
        }
    }
    if (chk == 1) {
        return true;
    }
    else {
        return false;
    }
}
var Arr = ["Pune", "Kothrud", "Marvellous", "Infosystem"];
var i = 0;
var Result = false;
Result = CheckString(Arr);
if (Result == true) {
    console.log("String Contains Marvellous in it");
}
else {
    console.log("String is Not Contains Marvellous in it");
}
