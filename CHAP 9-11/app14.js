// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var value1 = prompt("enter your 1st value")
var operator = prompt("enter your operator")
var value2 = prompt("enter your 1st value")

if (operator == "+"){
    alert((+value1) + (+value2))
}

else if (operator == "-"){
    alert(value1 - value2)
}

else if (operator == "*"){
    alert(value1 * value2)
}

else  if (operator == "/"){
    alert(value1 / value2)
}

else if (operator == "%"){
    alert(value1 * 100 / value2)
}


