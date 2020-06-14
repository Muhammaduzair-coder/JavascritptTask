// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


var MobilePhones = ["Apple",
    "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
    
  var x = document.getElementsByTagName("option")
  x.text = MobilePhones[2]