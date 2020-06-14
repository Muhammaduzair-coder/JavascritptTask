//13. The Lifetime Supply Calculator: Ever wonder how
//much a “lifetime supply” of your favorite snack is?
//Wonder no more.
//a. Store your favorite snack into a variable
//b. Store your current age into a variable.
//c. Store a maximum age into a variable.
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of
//your life.
//Output the result to the screen like so: “You will need
//NNNN to last you until the ripe old age of NN”.


var favsnack = "Chocklate Chip ";
var current_age = "15";
var maxage = "65";
var dailyUsage = "3";
var totalammountOFChip = (maxage - current_age) * dailyUsage ;

document.write( "<br> FAvourite snake :  " + favsnack);
document.write("<br> Estimated Age :  " + current_age);
document.write("<br> Amount of snack per day : " + dailyUsage);



document.write("<br> you will need " + totalammountOFChip + " chocklate chip to last you until yhe ripe old age of " + maxage );

 