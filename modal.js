function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const firstNameLabel = document.getElementById("first");
const lastNameLabel = document.getElementById("last");
const emailLabel = document.getElementById("email");
const birthdateLabel = document.getElementById("birthdate");
const participationQtyLabel = document.getElementById("quantity");
const location1Label = document.getElementById("location1");
const checkbox1Label = document.getElementById("checkbox1");

// Email format
const emailFormat = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])";

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  firstNameLabel.setAttribute("required","");
  lastNameLabel.setAttribute("required","");
  lastNameLabel.setAttribute("minlenght","2");
  emailLabel.setAttribute("required","");
  emailLabel.setAttribute("target", emailFormat);
  birthdateLabel.setAttribute("required","");
  participationQtyLabel.setAttribute("required","");
  location1Label.setAttribute("required","");
  checkbox1Label.setAttribute("required","");
}

// close modal event
closeBtn.addEventListener('click', closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


