// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

function chk(x){

var storepass;
storepass = x == "kamran"
return storepass;

}

var input;
do{
    
    input = prompt("enter your password")
    input1 = prompt("enter your password again")
    if(input === input1){
        alert (chk(input) + " congrats")
    
    }
} while (input == input1){alert("wrong" + " please enter a correct one") 
}