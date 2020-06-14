// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


function check(inputvalue)
{

var uppercas = ABCDEFGHIGKLMNOPQRSTWXYZ;
var numb = abcdefghijklmnopqrstwxyz;
if(inputvalue.value.match(uppercas)){
    alert("its uppercase");
    }
   else if(inputvalue.value.match(numb)){
        alert("its lowercase");
        }
        
    else {
        alert(

    "its number"
)
}
}