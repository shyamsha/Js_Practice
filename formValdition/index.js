document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const nameFeedback = document.getElementById("nameFeedback");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");

  const form = document.getElementById("registrationForm");

  const validateName = () => {
    const userNameRegex = /^[A-Za-z]+$/;
    const name = nameInput.value;
    if (!name.match(userNameRegex)) {
      nameFeedback.textContent = "Invalid";
      return false;
    } else {
      nameFeedback.textContent = "Valid";
      return true;
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const email = emailInput.value;
    if (!email.match(emailRegex)) {
      emailFeedback.textContent = "Invalid";
      return false;
    } else {
      emailFeedback.textContent = "Valid";
      return true;
    }
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*\d).{8,20}$/;
    const password = passwordInput.value;
    if (!password.match(passwordRegex)) {
      passwordFeedback.textContent = "Invalid";
      return false;
    } else {
      passwordFeedback.textContent = "Valid";
      return true;
    }
  };

  nameInput.addEventListener("input", function () {
    validateName();
  });

  emailInput.addEventListener("input", function () {
    validateEmail();
  });

  passwordInput.addEventListener("input", function () {
    validatePassword();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validateEmail() && validateName() && validatePassword()) {
      alert("Form submitted! (Add actual validation logic)");
    }
  });
});
