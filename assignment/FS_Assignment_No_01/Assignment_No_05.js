function DisplayFibo(Value1) {
    var No1 = 1;
    var No2 = 1;
    var No3 = 0;
    No3 = No1 + No2;
    console.log(" " + No1);
    console.log(" " + No2);
    console.log(" " + No3);
    while (No3 != Value1) {
        No1 = No2;
        No2 = No3;
        No3 = No1 + No2;
        console.log(" " + No3);
    }
}
var No1 = 21;
DisplayFibo(No1);
