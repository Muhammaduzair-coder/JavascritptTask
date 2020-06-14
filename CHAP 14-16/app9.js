
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students 

var st2 = "John";
var st3 = "Tony";
var st1Score = 320;
var st2Score = 230;
var st3Score = 480;
var totalMarks = 500;

var percentageForst1 = st1Score * 100 / totalMarks;

var percentageForst2 = st2Score * 100 / totalMarks;

var percentageForst3 = st3Score * 100 / totalMarks;

document.write("<b> score of " + st1 + " is " + st1Score + "."+ "Percentage : " + percentageForst1 + "% <br>");
document.write("score of " + st2 + " is " + st2Score + "."+ "Percentage : " + percentageForst2 + "%  <br>");
document.write("score of " + st3 + " is " + st3Score + "."+ "Percentage : " + percentageForst3 + "%  <br>");