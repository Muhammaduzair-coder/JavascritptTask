
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser

var add = prompt("");
var add = add.toUpperCase()

var colors = [ " <br> RED  <br>" , "GREEN <br>", "BLUE <br>", "PIRPLE <br>" , "BLUE <br>" ,"WHITE <br>" , "BLACK <br>" , "GREY <br>" ];
colors.splice(2,0 , add,"<br>" , )
document.write(colors)
