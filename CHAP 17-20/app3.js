//Write a program to print items of the following array
//using for loop:
//fruits = [“apple”, “banana”, “mango”, “orange”,
//“strawberry”]
//






var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"]
for (var i in fruits) {
    document.write(fruits[i] + "<br>")
}
for (var i in fruits) {
    document.write("<br> Element at index " + i)
    document.write("<br>")
    for (var j in fruits[i]) {
        document.write("<b>" + fruits[i][j]);
    }

}
