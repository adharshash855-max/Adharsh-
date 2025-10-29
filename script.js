const form = document.getElementById("userForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const successMsg = document.getElementById("successMsg");

function validateInput() {
  let valid = true;

  // Username validation
  if (username.value.trim().length < 3) {
    userError.style.display = "block";
    valid = false;
  } else {
    userError.style.display = "none";
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  // Password validation
  if (password.value.trim().length < 6) {
    passError.style.display = "block";
    valid = false;
  } else {
    passError.style.display = "none";
  }

  return valid;
}

// Real-time validation
username.addEventListener("input", validateInput);
email.addEventListener("input", validateInput);
password.addEventListener("input", validateInput);

// Submit validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInput()) {
    successMsg.style.display = "block";
    setTimeout(() => {
      form.reset();
      successMsg.style.display = "none";
    }, 1500);
  } else {
    successMsg.style.display = "none";
  }
});