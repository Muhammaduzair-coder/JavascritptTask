// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

function isCheck(){
var num = document.getElementById("tempchk").value
if(num == 40){document.getElementById("showMssg").innerHTML = (" “It is too hot outside.”") }

else if (num == 30){
         document.getElementById('showMssg').innerHTML = " “The Weather today is Normal.”";
         }

         else if (num == 20){
            document.getElementById('showMssg').innerHTML = " “Today’s Weather is cool.”";
            }
            else if (num == 10){
                document.getElementById('showMssg').innerHTML = " “OMG! Today’s weather is so Cool.”";
                }
                else {
                    document.getElementById('showMssg').innerHTML = " OPPS ! invalid input";
                    }

}
