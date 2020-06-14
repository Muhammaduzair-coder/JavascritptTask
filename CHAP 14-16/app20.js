// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var noun = ["This "];
var h_verb = ["is "];
var pronounc = ["my "];
var obj = ["cat "];
var awb = ["this" , "is" , "my" , "cat"]
document.write("Array   <br>  " + awb)
var arr = noun.join() + h_verb.join() + pronounc.join() + obj.join()
document.write( " <br>   Sting <br>" +  arr)
