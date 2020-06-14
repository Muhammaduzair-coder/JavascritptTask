// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = prompt("enter your value");
if(time >=0000 && time<1200 ){alert("Good Morning")}
else if(time >=1200 && time<1700 || time ==1200 ){alert("Good Afternoon")}
else if(time >=1700 && time<2100 || time ==1700 ){alert("Good Evening")}
else if(time >=2100 && time<2359 || time ==2100 ){alert("Good Night")}