//2. What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b


var a = 2;
var b = 1;
document.write("<br> a is :  " + a  );
document.write("<br> b is : " + b);
var a = 2;
var b = 1;
var result =  --a - --b + ++b + b--;
document.write("<br> result is : " + result); 


var a = 2;
var b = 1;
var r1 = --a;
document.write("<br> <br>  the value of --a is : " +  r1);



var a = 2;
var b = 1;
var r2 = --a - --b;
document.write("<br> <br>  the value of--a - --b is : " +  r2);



var a = 2;
var b = 1;
var r3 = --a - --b + ++b;
document.write("<br> <br>  the value of --a - --b + ++b is : " +  r3);



var a = 2;
var b = 1;
var r4 = --a - --b + ++b + b--;
document.write("<br> <br>  the value of--a - --b + ++b + b--  is : " +  r4);