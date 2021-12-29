// SHORTCUTS --------------------------------------------

// DOM Elements creation
const newParagraphElement = document.createElement("p");

// DOM Elements targetting
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const participationQtyInput = document.getElementById("quantity");
const location1Input = document.getElementById("location1");
const checkbox1Input = document.getElementById("checkbox1");
const modalFieldWrapper = document.getElementsByClassName("formData");
const submitBtn = document.getElementsByClassName("btn-submit");

// Regex rules
const regexString = new RegExp(`^[a-zA-Z]+$`)
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;



// SCRIPT -----------------------------------------

// launching modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// activating validation button


// close button modal event
closeBtn.addEventListener('click', closeModal);

// 'escape' key modal event
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeModal;
  };
});

// firstname field validation
firstNameInput.addEventListener('input', () => {
  if (nameValidation(firstNameInput)) {
    firstNameInput.parentElement.setAttribute("data-error-visible", "false");
    modalValidation;
  } else {
    firstNameInput.parentElement.setAttribute("data-error-visible", "true");
  }
});

// lastname field validation
lastNameInput.addEventListener('input', () => {
  if (nameValidation(lastNameInput)) {
    lastNameInput.parentElement.setAttribute("data-error-visible", "false");
    modalValidation;
  } else {
    lastNameInput.parentElement.setAttribute("data-error-visible", "true");
  }
});

// email field validation
emailInput.addEventListener('input', () => {
  if (emailValidation(emailInput)) {
    emailInput.parentElement.setAttribute("data-error-visible", "false");
    modalValidation;
  } else {
    emailInput.parentElement.setAttribute("data-error-visible", "true");
  }
});

// participation number field validation
participationQtyInput.addEventListener('input', () => {
  if (isWholeNumber(participationQtyInput.value) 
  && isNotEmpty(participationQtyInput.value)
  ) {
    participationQtyInput.parentElement.setAttribute("data-error-visible", "false");
  } else {
    participationQtyInput.parentElement.setAttribute("data-error-visible", "true");
  }
});


// FUNCTIONS ------------------------------------------

// burger menu
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// MODAL FUNCTIONS
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// TEST FUNCTIONS
// check field is not empty
function isNotEmpty(val) {
  if (typeof val !== 'undefined' && val) {
    return true;
  }
  return false;
}

// check type 'string'
function isString(val) {
  if (regexString.test(val)) {
    return true;
  }
  return false;
}  

// check type 'number'
function isWholeNumber(val) {
  if (isNaN(val) && val < 0) {
    return false;
  }
  return true;
}  

// check field lentgh
function minTwoChar(val) {
  if (val.length < 2) {
    return false;
  }
  return true;
}

// check email format conformity
function emailFormatValidation(val) {
  if (regexEmail.test(val)) {
    return true;
  }
  return false;
}

// FIELD TESTING FUNCTIONS
// testing name field
function nameValidation(input) {
  if (isString(input.value) 
  && minTwoChar(input.value) 
  && isNotEmpty(input.value)) {
    return true;
  }
  return false;
}

// testing email field
function emailValidation(input) {
  if (emailFormatValidation(input.value) 
  && isNotEmpty(input.value)) {
    return true;
  }
  return false;
}

// modal validation
function modalValidation () {
  if (nameValidation(firstNameInput) 
  && nameValidation(lastNameInput) 
  && emailFormatValidation(emailInput)) {
    console.log("true");
//    submitBtn.removeAttribut("disabled");
//    document.getElementsByClassName("btn-submit").parentElement.classList.remove("btn-disabled");
  } else {
    console.log("false");
//    submitBtn.setAttribut("disabled", "");   
//    document.getElementsByClassName("btn-submit").parentElement.classList.add("btn-disabled");
  }
}