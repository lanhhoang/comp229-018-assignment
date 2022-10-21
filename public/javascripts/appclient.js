/*
File name: public/javascripts/appclient.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 14, 2022
*/

console.log("it goes to the client-side");

const signOutLink = document.querySelector("#signout");
if (signOutLink) {
  signOutLink.addEventListener("click", () => confirm("Are you sure?"));
}

if (getTitle === "Business Contact List" || getTitle === "Edit Contact") {
  let deleteButtons = document.querySelectorAll(".btn-danger");

  for (button of deleteButtons) {
    button.addEventListener("click", (event) => {
      if (!confirm("Are you sure?")) {
        event.preventDefault();
      }
    });
  }
}

if (getTitle === "Sign Up Form") {
  const passwordConfirmationInput = document.querySelector(
    "input[name=password_confirmation]"
  );

  passwordConfirmationInput.addEventListener("change", onChange);
}

function onChange() {
  const passwordInput = document.querySelector("input[name=password]");
  const passwordConfirmationInput = document.querySelector(
    "input[name=password_confirmation]"
  );

  if (passwordConfirmationInput.value === passwordInput.value) {
    passwordConfirmationInput.setCustomValidity("");
  } else {
    passwordConfirmationInput.setCustomValidity("Passwords do not match");
  }
}
