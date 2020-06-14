// Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser

var add = prompt("enter your color");
var add1= prompt("enter your color again");

var add = add.toUpperCase()
var add1 = add1.toUpperCase()
var colors = [ " <br> RED  <br>" , "GREEN <br>", "BLUE <br>", "PIRPLE <br>" , "BLUE <br>" ,"WHITE <br>" , "BLACK <br>" , "GREY <br>"  , add , "<br>",add1];
document.write(colors);
