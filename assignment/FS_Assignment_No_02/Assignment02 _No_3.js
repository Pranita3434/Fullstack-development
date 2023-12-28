function Maximum(Arr) {
    var LargeNum = 0;
    var i = 0;
    var Num = 0;
    for (i = 0; i < Arr.length; i++) {
        Num = LargeNum;
        if (LargeNum < Arr[i]) {
            LargeNum = Arr[i];
        }
    }
    return Num;
}
var Value = [23, 89, 6, 80, 56, 45, 32, 77];
var iRet = 0;
iRet = Maximum(Value);
console.log("Maximum Number is : " + iRet);
