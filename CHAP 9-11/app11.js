// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”


var randomnumber = (Math.random()*10);
var guess = prompt("enter your guess from 0 to 10");
if (guess >4 && guess <6 ){
    if (guess == randomnumber){
        alert("failed");}
    else{
        alert("bingo");
    }
}