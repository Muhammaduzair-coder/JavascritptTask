
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page.

var totalnum = prompt("enter your total num for each subject")


var ob1 = prompt("enter your obtain marks for sub1")
var ob2 = prompt("enter your obtain marks for sub2")
var ob3 = prompt("enter your obtain marks for sub3")
var totalsum = totalnum + totalnum + totalnum ;
var obtotal = ob1 + ob2 + ob3;
var percent = obtotal * 100 / totalsum;

document.getElementsByClassName('totalm').innerHTML = "TOTAL MARKS : " + totalsum;
document.getElementsByClassName('obm').innerHTML = "OBTAINED MARKS : " + obtotal;
document.getElementsByClassName('percen').innerHTML = "PERCENTAGE : " + percent + "%";
 if(percent > 80){document.getElementsByClassName("grad").innerHTML = "GRADE : " + "A-one"}
 else if (percent > 70){document.getElementsByClassName('grad').innerHTML = "GRADE : " + "A"}
 else if (percent > 60){document.getElementsByClassName('grad').innerHTML = "GRADE : " + "B"}
else if(percent < 60){document.getElementsByClassName('grad').innerHTML = "GRADE : " + "Fail"}

if(percent > 80){document.getElementsByClassName('remark').innerHTML = "REMARKS : " + "eXCELLENT"}
else if (percent > 70){document.getElementsByClassName('remark').innerHTML = "REMARKS : " + "gOOD"}
else if (percent > 60){document.getElementsByClassName('remark').innerHTML = "REMARKS : " + "YOU NEED TO IMPROVE"}
else if(percent < 60){document.getElementsByClassName('remark').innerHTML = "REMARKS : " + "sORRY"}


