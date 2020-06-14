//
//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
//script to convert the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
//and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write(  " <b> CURRENCY IN PKR" );
var My$balance = "10" , MyRbalance = "25", US1 = "104.80" , R1 = "28", total = My$balance * US1 + MyRbalance * R1 ;

document.write(" <br> Total Price In PKR  " + total);