const reg =document.querySelector(`#registration`);
const userName=document.querySelector(`#regName`);
const email =document.querySelector(`#regEmail`);
const pWord=document.querySelector(`#regPW`);
const pCheck=document.querySelector(`#regPWCheck`);
const error=document.querySelector(`#errorDisplay`)

reg.addEventListener(`submit`,(event)=>{
//username must be 4 characters+
    if(userName.value.length<4){
        event.preventDefault();
        error.textContent=`Username must be at least 4 characters`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
        userName.focus();
    }
    else if(userVal()){
        event.preventDefault();
        error.textContent=`Username cannot contain spaces or special characters`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
        userName.focus();
    }
    else if((userName.value.length-userUnique())<2){
        event.preventDefault();
        error.textContent=`Username must have at least 2 unique characters`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
        userName.focus();
    }

    //email validations
    if(!emailVal){
        event.preventDefault();
        error.textContent=`Please enter a valid username`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
    } else if(email.value.includes(`example.com`)){
        event.preventDefault();
        error.textContent=`example.com is not a valid domain name`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
    }

    //todo:password validations trying to use the regex function to handles the first 4 req
    //password validation
    if(pWord.value.includes(`password`)){
        event.preventDefault();
        error.textContent=`password must not contain the word password`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
    }else if(pWord.value.includes(userName.value)){
        event.preventDefault();
        error.textContent=`password must not contain the username`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
    }else if(pWord.value!==pCheck.value){
        event.preventDefault();
        error.textContent=`Both password entries must match`;
        error.style.display=`block`;
        setTimeout(() => {
            error.style.display=`none`;
        }, 2000);
    }





});

//username must not contain whitespace or special characters
function userVal(){
    debugger
    const regEx=/(\W|\s)/;
    return regEx.test(userName.value);
}

// username
function userUnique() {
  let count = 0;
  for (let i = 0; i < userName.value.length; i++) {
    for (let j = i+1; j < userName.value.length; j++) {
      if (userName[i] == userName[j]) {
        count++;
      }
    }
  }
  return count;
}

function emailVal(){
    const regEx=/^[\w\W]+@[\w]{2,}\.[\w]{2,3}$/
    return regEx.test(email.value);
}

function passVal(){
    const regEx=/[A-Z][a-z][0-9][\W]{12,} /
}