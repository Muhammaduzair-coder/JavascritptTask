//
//You have an array
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array.
//After searching, prompt the user whether the given item is
//found in the list or not. Example:

var chk = prompt("chk your items");
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
for (i = 0; i < A.length; i++) {
    if (A[i] === chk) {
        alert(chk + " is available at index " + i + " available at our bakery")
        break;
    } else {
        alert("We are sorry " + chk + " is not available at our bakery")
        break;
    }
}
