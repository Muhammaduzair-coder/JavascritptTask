// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("enter your gender ", "")
if (gender === "male"){
    alert("Good Morning sir");
}
else if (gender === "female"){
    alert("Good Morning MAM");
}

   else{
alert("invalid command");
   }