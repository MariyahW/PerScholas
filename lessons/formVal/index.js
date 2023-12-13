const reg = document.querySelector(`#registration`);
const userName = document.querySelector(`#regName`);
const email = document.querySelector(`#regEmail`);
const pWord = document.querySelector(`#regPW`);
const pCheck = document.querySelector(`#regPWCheck`);
const error = document.querySelector(`#errorDisplay`);
let user = {};
const users = [];

reg.addEventListener(`submit`, (event) => {
  //username must be 4 characters+
  if (userName.value.length < 4) {
    event.preventDefault();
    error.textContent = `Username must be at least 4 characters`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
    userName.focus();
  } else if (userVal()) {
    event.preventDefault();
    error.textContent = `Username cannot contain spaces or special characters`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
    userName.focus();
  } else if (!userUnique()) {
    event.preventDefault();
    error.textContent = `Username must have at least 2 unique characters`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
    userName.focus();
  }

  //email validations
  if (!emailVal) {
    event.preventDefault();
    error.textContent = `Please enter a valid username`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  } else if (email.value.includes(`example.com`)) {
    event.preventDefault();
    error.textContent = `example.com is not a valid domain name`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  }

  //password validation
  if (pWord.value.includes(`password`)) {
    event.preventDefault();
    error.textContent = `password must not contain the word password`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  } else if (pWord.value.includes(userName.value)) {
    event.preventDefault();
    error.textContent = `password must not contain the username`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  } else if (pWord.value !== pCheck.value) {
    event.preventDefault();
    error.textContent = `Both password entries must match`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  } else if (!passVal()) {
    event.preventDefault();
    error.textContent = `Password must contain 1 lowercase, 1 Uppercase, 1 Special Character, a number and be at least 12 characters long.`;
    error.style.display = `block`;
    setTimeout(() => {
      error.style.display = `none`;
    }, 2000);
  }

  user = {
    username: userName.value.toLowerCase(),
    email: email.value.toLowerCase(),
    password: pWord.value,
  };

  users.push(user);
  localStorage.setItem("user", JSON.stringify(users));
});



//username must not contain whitespace or special characters
function userVal() {
  const regEx = /(\W|\s)/;
  return regEx.test(userName.value);
}

// username has 2 unique characters
function userUnique() {
  let user = userName.value.toLowerCase();
  const unique = [...new Set(user)];
  let isUnique = 0;
  let count = 0;
  console.log(unique);
  console.log(user);
  for (let j = 0; j < unique.length; j++) {
    for (let i = 1; i < user.length; i++) {
      if (unique[j] == user[i]) {
        count++;
        console.log(count);
      }
    }
    if (count == 1) {
      isUnique++;
    }
    if (isUnique >= 2) {
      return true;
    }
    count = 0;
  }
  return false;
}

function emailVal() {
  const regEx = /^[\w\W]+@[\w]{2,}\.[\w]{2,3}$/;
  return regEx.test(email.value);
}

function passVal() {
  const regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*-_]).{12,}/;
  console.log(regEx.test(pWord.value));
  return regEx.test(pWord.value);
}



