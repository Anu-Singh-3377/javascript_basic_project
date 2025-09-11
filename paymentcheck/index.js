//.checked = property that determines the check state of 
//   an HTML checkbox or radio button element

/*ternary operator = a shortcut to if() and else() statement
                    helps to assign variable based on the condition
                        condition? codeif True : code ifFalse;
  */                      

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

document.getElementById("mySubmitBtn").onclick= function(){
    if(myCheckBox.checked){
        subResult.textContent =`You are subscribed`;
    }
    else{
        subResult.textContent=`you are NOT subscribed`;
    }
    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent= `you are paying with Mastercard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent=`you are paying with payPal`;
    }
    else{
        paymentResult.textContent=`you must select payment type`;
    }
}
