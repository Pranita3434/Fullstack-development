function CheckEven(no) {
    var iDigit = 0;
    var Num = no;
    var Temp = 0;
    while (no != 0) {
        iDigit = no % 10;
        Temp = Temp + (iDigit * iDigit * iDigit);
        no = Math.floor(no / 10);
    }
    if (Num == Temp) {
        return true;
    }
    else {
        return false;
    }
}
var Value = 153;
var Result = false;
Result = CheckEven(Value);
if (Result == true) {
    console.log("It is Armstrong Number");
}
else {
    console.log("IT is NOT Armstrong Number");
}
