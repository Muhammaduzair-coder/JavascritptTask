// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


var tlight = prompt("enter your condition ", "")
if (tlight === "red"){
    alert("must stop");
}
else if (tlight === "yellow"){
    alert("ready to move");
}
else if (tlight === "green"){
    alert("move now");
}
   else{
alert("invalid command");
   }
