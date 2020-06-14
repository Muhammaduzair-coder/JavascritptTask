// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

function isVowel(x) {
    var result;
result = x == "A" || x == "E" || x == "I" || x == "O" || x == "U"
return result;

}
var input;
do{
    input = prompt("enter your word");
if (input.length == 1){
    alert(isVowel(input));
}

} while (input.length != 1); 
