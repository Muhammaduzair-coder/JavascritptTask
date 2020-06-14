// 9. Write a program that checks whether the given input is an
// even number or an odd number.


function isCheck(){
    var num = document.getElementById('evenOdd').value;
    // alert(num);
    if((num%2) == 0){
    document.getElementById('showMssg').innerHTML = "Hurray! Number "+num+"  is an even number";
    }
    else{
    document.getElementById('showMssg').innerHTML = "Oo No! "+num+"  is not an even number";
    }
   
    if(num === ""){
    document.getElementById('showMssg').innerHTML = "";
    }
   }
   
   function isChecks(){
    var num = document.getElementById('evenOdds').value;
    // alert(num);
    if((num%2) == 0){
    document.getElementById('showMssgs').innerHTML = "Hurray! Number "+num+"  is an even number";
    }
    else{
    document.getElementById('showMssgs').innerHTML = "Oo No! "+num+"  is not an even number";
    }
   
    if(num === ""){
    document.getElementById('showMssgs').innerHTML = "";
    }
   }