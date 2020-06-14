//11. The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable.
//b. Store their birth year in a variable.
//c. Calculate their 2 possible ages based on the stored
//values.
//Output them to the screen like so: “They are either NN or NN
//years old”.

document.write("<br> AGE CALCULATOR", "<br>" )

var currentYear = "2020";
var BirthYear = "2005";
var ageFinder = currentYear - BirthYear;

document.write(" <br> Current Year : " + currentYear);
document.write(" <br>  Birth Tear : " + BirthYear);
document.write("  <br> Your Age Is : " + ageFinder);