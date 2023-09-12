# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Git Hub](https://github.com/Aimhigh99/newsletter-sign-up)
- Live Site URL: [Live Site](https://newsletter-sign-up-opal.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learnt to change the add a class to an elemement or remove it using javascript. I also learnt to listen user interactions such click and onchange, set and call functions, and to validate email input.

In CSS, I learn't to apply a background gradient.

```js
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
```

```css
.button:active {
  background: linear-gradient(90deg, var(--tomato-dark), var(--tomato));
}
```

### Continued development

I would to work on more JavaScript projects to enhance my skills

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@aimhigh99](https://www.frontendmentor.io/profile/aimhigh99)
- Twitter - [@ericaimhigh](https://www.twitter.com/ericaimhigh)
