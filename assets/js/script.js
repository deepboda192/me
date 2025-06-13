"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// // custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

function sendMessage(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("emailId").value;
  const message = document.getElementById("message").value;

  // Create an object with the data to send to the API
  const data = {
    fullName: fullName,
    email: email,
    message: message,
  };

  // Make an API request (you may need to replace the URL with your actual API endpoint)
  fetch(
    "https://script.google.com/macros/s/AKfycbyLjij8Lo873lfb7SRxADSADI3k8TWm3sOrBgeua0YoBdDxU6hy8D6hcLY8uJwOtXUk3g/exec",
    {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      if (response.ok) {
        // Handle a successful response, e.g., show a success message to the user
        alert("Message sent successfully");
      } else {
        // Handle the case where the API request was not successful
        alert("Message sending failed");
      }
    })
    .catch((error) => {
      // Handle any network or other errors
      console.error("Error:", error);
    });
}
