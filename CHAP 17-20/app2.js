//Write a program to print multiplication table of any
//number using for loop. Table number & length should be
//taken as an input from user.


var table = prompt("enter your value for multiplication table");
var tablecount = prompt("Enter the table length")
document.write("Table of : " + table + "<br>" + "Table length is : " + tablecount + "<br><br>")
var i = 1;
for (i = 1; i < tablecount; i++) {
    document.write(table + "x" + i + "=" + table * i + "<br>")
}
