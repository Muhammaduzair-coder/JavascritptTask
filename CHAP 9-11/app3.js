// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    


var litre = prompt("enter your litre ", "")
if (litre > 1){
    alert("you are ready to ride");
}
else if (litre < 0.25){
    alert("please fill the fuel in your car");
}

   else{
alert("invalid command");
   }