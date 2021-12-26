//Get DATA
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector(".success");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){
     
    clearMessages();
    let errorFlag =false;

  if(nameInput.value.length < 1){
    errorNodes[0].innerText = "NAME CANT BE BLANK YSAFER WADJHK";
     nameInput.classList.add("error-border"); 
     errorFlag = true;
  }

  if(!emailIsValide(email.value)){
    errorNodes[1].innerText = "INVALID EMAIL ADDRESS YSAFER WADJHK";
    email.classList.add("error-border"); 
    errorFlag = true;
  }

  if(message.value.length<1){
    errorNodes[2].innerText = "SEND A MESSAGE YSAFER WADJHK <3";
    message.classList.add("error-border"); 
    errorFlag = true;
  }

  if(!errorFlag){
    success.innerText = "Congrats sahbi <3";
  }
}

function clearMessages(){
    for (let i=0; i<errorNodes.length; i++){
        errorNodes[i].innerText ="";
    }
        success.innerText ="";
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        message.classList.remove("error-border");
    
}

function emailIsValide(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}