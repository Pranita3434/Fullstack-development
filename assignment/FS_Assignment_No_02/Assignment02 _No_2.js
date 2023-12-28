function Summation(Arr) {
    var Sum = 0;
    var i = 0;
    for (i = 0; i < Arr.length; i++) {
        Sum = Arr[i] + Sum;
    }
    return Sum;
}
var Value = [23, 6, 7, 4, 5, 7];
var iRet = 0;
iRet = Summation(Value);
console.log("Addition is : " + iRet);
