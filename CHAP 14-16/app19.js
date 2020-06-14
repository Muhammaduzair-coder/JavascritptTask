// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array


var cities = ["Karachi" , "Lahore" , "Islamabad" , "Faislabad"  , "Peshwar" , "Quetta"]
document.write("cities list <br>" + cities )
var selected = cities.slice(1,3);
document.write(" <br> Selected cities  : " + selected)