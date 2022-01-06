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
const submitBtn = document.querySelector(".btn-submit");

// Regex rules
const regexString = new RegExp(`^[a-zA-Z]+$`);



// SCRIPT -----------------------------------------

// launching modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

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
  hideError(firstNameInput.parentElement);
  if (!nameValidation(firstNameInput)) {
    showError(firstNameInput.parentElement);
  }
  modalValidation();
});

// lastname field validation
lastNameInput.addEventListener('input', () => {
  hideError(lastNameInput.parentElement);
  if (!nameValidation(lastNameInput)) {
    showError(lastNameInput.parentElement);
  }
  modalValidation();
});

// email field validation
emailInput.addEventListener('input', () => {
  hideError(emailInput.parentElement);
  if (!emailValidation(emailInput)) {
    showError(emailInput.parentElement);
  }
  modalValidation();
});

// birthdate field validation
birthdateInput.addEventListener('input', () => {
  hideError(birthdateInput.parentElement);
  if (!dateValidation(birthdateInput)) {
    showError(birthdateInput.parentElement);
  }
  modalValidation();
});

// participation number field validation
participationQtyInput.addEventListener('input', () => {
  hideError(participationQtyInput.parentElement);
  if (!participationQtyValidation(participationQtyInput)) {
    showError(participationQtyInput.parentElement);
  }
  modalValidation();
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

//check field is not null
function isNotNull(val) {
    return(isNaN(val.valueOf()));
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
  return(!isNaN(val) && val >= 0);
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
  // console.log(val.value)
  return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val.value));
}

// ERROR MESSAGE FUNCTIONS
// hiding error message
function hideError (el) {
  el.setAttribute("data-error-visible", "false");
}

// showing error message
function showError (el) {
  el.setAttribute("data-error-visible", "true");
}

// FIELD TESTING FUNCTIONS
// testing name field
function nameValidation(input) {
  return (isString(input.value) && minTwoChar(input.value) && isNotEmpty(input.value));
}

// testing email field
function emailValidation(input) {
  return (emailFormatValidation(input) && isNotEmpty(input));
}

// testing date field
function dateValidation(input) {
  console.log(input.value);
  return (isNotNull(input.value));
}

// testing participationQty field
function participationQtyValidation(input) {
  return (isWholeNumber(input.value) && input.value <=99);
}

// modal validation
function modalValidation () {
  // console.log(nameValidation(firstNameInput), nameValidation(lastNameInput), emailFormatValidation(emailInput));
    if (nameValidation(firstNameInput) && nameValidation(lastNameInput) && emailFormatValidation(emailInput) && dateValidation(birthdateInput) && participationQtyValidation(participationQtyInput)) {
    // console.log("true");
    submitBtn.removeAttribute("disabled");
    document.querySelector(".btn-submit").classList.remove("btn-disabled");
  } else {
    // console.log("false");
    submitBtn.setAttribute("disabled", "");   
    document.querySelector(".btn-submit").classList.add("btn-disabled");
  }
}