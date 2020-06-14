//7. Write a program to implement checkout process of a
//shopping cart system for an e-commerce website. Store
//the following in variables

var item1Price = "650";
var item2Price = "100";
var quantityItem1 = "3";
var quantityItem2 = "7";
var shippingCharges = "100";

var qtyOfItem1 = "3"
var qtyOfItem2 = "7"
var total = item1Price * quantityItem1 + item2Price * quantityItem2 ;

document.write(" <b> SHOPPING CART")
document.write("<br>");

document.write(" <br> Price of item 1 is " + item1Price);

document.write(" <br> Quantity of item 1 is " + qtyOfItem1);

document.write(" <br> Price of Item 2 is " + item2Price);

document.write(" <br> Quantity of item 2 is " +  quantityItem2);

document.write(" <br> Total Cost Of your Order Is " + total);
