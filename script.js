const emailInput = document.querySelector("#email");
const emaiErr = document.querySelector(".invalid");
const form = document.querySelector(".container");
const success = document.querySelector(".success");
const subcribeBtn = document.querySelector(".subscribe");
const dismissBtn = document.querySelector(".dismiss");

// Email field validation
function validateEmail() {
  email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    emailInput.classList.add("error");
    emaiErr.style.display = "block";
  } else {
    emailInput.classList.remove("error");
    emaiErr.style.display = "none";
  }
}

emailInput.addEventListener("change", () => {
  validateEmail();
});

// Display success message
subcribeBtn.addEventListener("click", () => {
  success.style.display = "flex";
  form.style.display = "none";
});

// Dimiss success message
dismissBtn.addEventListener("click", () => {
  form.style.display = "flex";
  success.style.display = "none";
});
