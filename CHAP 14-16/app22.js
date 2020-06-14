// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var store = ["keyboard"  , "mouse" , "printer" , "monitor"];
document.write("Devices <br>" + store +"<br><br>" )
var reverse = store.reverse();
var join = reverse.join("<br> Out : <br>")
document.write(join);
