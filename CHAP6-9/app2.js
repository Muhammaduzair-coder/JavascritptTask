//3. Write a program that takes input a name from user &
//greet the user
// from textBoxes.html
function sayHi(){
    var txtName = document.getElementById("txtName");
    var txtOutput = document.getElementById("txtOutput");
    var name = txtName.value;
    txtOutput.value = "ASSALAM O ALIEKUM " + name + " thanks to visit"
    } // end sayHi