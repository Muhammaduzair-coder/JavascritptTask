//
//6. Take
//a) Take three subjects name from user and store them in 3
//different variables.
//b) Total marks for each subject is 100, store it in another
//variable.
//c) Take obtained marks for first subject from user and
//stored it in different variable.
//ALERTS | JAVASCRIPT
//Page 3 of 3
//d) Take obtained marks for remaining 2 subjects from user
//and store them in variables.
//e) Now calculate total marks and percentage and show the
//result in browser like this.(Hint: user table


function sayhi(){
    var s1 = document.getElementById("s1");

    var subj1 = s1.value;

    var s2 = document.getElementById("s2");

    var subj2 = s2.value;

    var s3 = document.getElementById("s3");

    var subj3 = s1.value;
//its for each subject
var totalNUM = 100;
//



var ob1 = document.getElementById("ob1");
var ob1 = ob1.value;


var ob2 = document.getElementById("ob2");
var ob2 = ob2.value;


var ob3 = document.getElementById("ob3");
var ob3 = ob3.value;
//totalall
var totalforall = totalNUM + totalNUM + totalNUM;
//

//PERCENTAGE FOR EACH SUBJECT

var pe1 = ob1 * 100 / totalNUM;
var pe2 = ob2 * 100 / totalNUM;
var pe3 = ob3 * 100 / totalNUM;
//

//total obtainedmarks
var totalmarksofstudent = +(ob1) + +(ob2) + +(ob3);
//

//totalpercentage
var percentageOfStudent = totalmarksofstudent * 100 / totalforall ; 
//


document.getElementById("sub1").innerHTML = subj1;

document.getElementById("sub2").innerHTML = subj2;

document.getElementById("sub3").innerHTML = subj3;


document.getElementById("t1_mk").innerHTML = totalNUM;
document.getElementById("t2_mk").innerHTML = totalNUM;
document.getElementById("t3_mk").innerHTML = totalNUM;


document.getElementById("o1_mk").innerHTML = ob1;

document.getElementById("o2_mk").innerHTML = ob2;

document.getElementById("o3_mk").innerHTML = ob3;

document.getElementById("percentage-1").innerHTML = pe1 + " %";
document.getElementById("percentage-2").innerHTML = pe2 + " %";
document.getElementById("percentage-3").innerHTML = pe3 + " %";

document.getElementById("add_totalMarks").innerHTML = totalforall;
document.getElementById("add_obtainedMarks").innerHTML = totalmarksofstudent;
document.getElementById("add_totalPercentage").innerHTML = percentageOfStudent + " %";



}