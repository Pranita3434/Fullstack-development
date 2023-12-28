function DisplayFactoer(Value1) {
    var Result = 0;
    var iCnt = 0;
    for (iCnt = 1; iCnt <= Value1 / 2; iCnt++) {
        if ((Value1 % iCnt) == 0) {
            console.log(" " + iCnt);
        }
    }
}
var No1 = 20;
DisplayFactoer(No1);
