//
//4.
//5. Write a program to take input a number from user &
//display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5
//should be displayed by default

function sayHi(){
    var txtName = document.getElementById("txtName");
 
    var name = txtName.value;


var i=0;
for(i=1; i<11; i++){document.write(  name + "x" + i + "=" + name*i +  "<br>"  )} 
}
