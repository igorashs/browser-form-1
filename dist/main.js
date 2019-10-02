// form and its elements
const form = document.querySelector('.js-form');
const email = document.getElementById('email');
const emailConfirm = document.getElementById('email-confirm');
const zipCode = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

// test value of email
const isEmailValid = function isEmailValid(email) {
  const EMAIL_REG = /^[a-zA-Z]+(\.[a-zA-Z]+)?@[a-zA-Z]+\.[a-zA-Z]+$/;
  return EMAIL_REG.test(email);
};

// test value of MD zip code
const isZipValid = function isZipValid(zipCode) {
  const MD_ZIP_REG = /^MD-\d{4}$/;
  return MD_ZIP_REG.test(zipCode);
};

// test value of password
const isPasswordValid = function isPasswordValid(password) {
  return password.length >= 8 ? true : false;
};

// validate email input
const validateEmailInput = function validateEmailInput(email) {
  const label = email.nextElementSibling;

  if (email.value.length === 0) {
    label.classList.add('error');
    label.textContent = 'email is required';
    return false;
  } else if (isEmailValid(email.value)) {
    label.classList.remove('error');
    return true;
  } else {
    label.classList.add('error');
    label.textContent = 'use the format example@example.com';
    return false;
  }
};

// validate email confirmation input
const validateEmailConfInput = function validateEmailConfInput(emailC, email) {
  const label = emailC.nextElementSibling;

  if (emailC.value === email.value) {
    label.classList.remove('error');
    return true;
  } else {
    label.classList.add('error');
    return false;
  }
};

// validate zip code input
const validateZipCodeInput = function validateZipCodeInput(zipCode) {
  const label = zipCode.nextElementSibling;

  if (isZipValid(zipCode.value)) {
    label.classList.remove('error');
    return true;
  } else {
    label.classList.add('error');
    return false;
  }
};

// validate password input
const validatePassInput = function validatePassInput(password) {
  const label = password.nextElementSibling;

  if (isPasswordValid(password.value)) {
    label.classList.remove('error');
    return true;
  } else {
    label.classList.add('error');
    return false;
  }
};

// validate password confirmation input
const validatePassConfInput = function validatePassConfInput(
  passwordC,
  password
) {
  const label = passwordC.nextElementSibling;

  if (passwordC.value === password.value) {
    label.classList.remove('error');
    return true;
  } else {
    label.classList.add('error');
    return false;
  }
};

// add email validation handler
email.addEventListener('input', () => {
  validateEmailInput(email);
  validateEmailConfInput(emailConfirm, email);
});

// add email confirmation validation handler
emailConfirm.addEventListener('input', () => {
  validateEmailConfInput(emailConfirm, email);
});

// add zip code validation handler
zipCode.addEventListener('input', () => {
  validateZipCodeInput(zipCode);
});

// add password validation handler
password.addEventListener('input', () => {
  validatePassInput(password);
  validatePassConfInput(passwordConfirm, password);
});

// add password confirmation validation handler
passwordConfirm.addEventListener('input', () => {
  validatePassConfInput(passwordConfirm, password);
});

// add form on submit
form.addEventListener('submit', (e) => {
  if (
    validateEmailInput(email) &&
    validateEmailConfInput(emailConfirm, email) &&
    validateZipCodeInput(zipCode) &&
    validatePassInput(password) &&
    validatePassConfInput(passwordConfirm, password)
  ) {
    alert('Good');
  }

  e.preventDefault();
});
