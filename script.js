/*
  set DOM variables
  */
  const displayFormButton = document.getElementById("display-form-button"); 
  const birthdayButton = document.getElementById("birthday-button");
  const circleButton = document.getElementById("circle-button");
  const cToFButton = document.getElementById("c-f-button");
  const fToCButton = document.getElementById("f-c-button");

/*
 function variables
 */
  const promptInput = "Please input all required data in this module to get result.";

/*
  TASK 1: THE AGE CALCULATOR
  */
  function calculateAge(birthday) {
    const today = new Date(); //method to get current date
    const birthDate = new Date(birthday);
    const years = today.getFullYear() - birthDate.getFullYear();
    
    // Reset birthday to the current year.  
    birthDate.setFullYear(today.getFullYear()); 

    // If the user's birthday has not occurred yet this year, subtract 1.  
    if (today < birthDate)  
      years--; 

    return years; //this is the final age
  }

/*
  TASK 2: THE LIFETIME SUPPLY CALCULATOR
 */
  function calculateSupply(currentAge, maxAge, dailyAmount) {
    const remainingDays = (maxAge - currentAge) * 365;

    return Math.round(remainingDays * dailyAmount);
  }

/*
  TASK 3: THE GEOMETRIZER
  */
  function calcCircumference(radius) {
    let result = (2 * Math.PI * radius).toFixed(2); //Use C =  2 * PI * r equation and fix the decimal
    return result;
  }

  function calcArea(radius) {
    let result = (Math.PI * radius * radius).toFixed(2); //Use a =  PI * r * r equation and fix the decimal
    return result;
  }

/* 
  TASK 4: THE TEMPERATURE CONVERTER
  */

  function celsiusToFahrenheit(celsius) {
    let result = celsius * 9 / 5 + 32;
    return console.log(`${celsius}°C is ${result}°F`);
  }

  function fahrenheitToCelsius(fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9;
    return console.log(`${fahrenheit}°C is ${result}°F`);
  }

/*
  functions to manipulate DOM
  */
  
  //function to display the hidden forms
  function displayContent(displayable) {
    displayable.style.display = "block";
  }

  //function that generates a text area to show message
  function addTextArea(text) {
    const textArea = document.createElement("div");
    textArea.classList.add("text-area")
    const content = document.createTextNode(text);
    textArea.appendChild(content);
    return textArea;
  }

  //function that deletes obsolete text window
  function deleteTextArea(parentEl) {
    const child = parentEl.querySelectorAll("div.text-area");
    if (child.length > 0)
      child.forEach(e => e.parentNode.removeChild(e)); //delete all the child node from parent if any
  }

  //compose a ready div with text and push it into DOM
  function showTextInDOM(parentEl, text) {
    const textArea = addTextArea(text);
    parentEl.appendChild(textArea);
  }

  
/*
  click events
  */
  displayFormButton.addEventListener("click", () => {
    const mainContent = document.getElementById("main-content"); //Note for myself: if this is put outside, next event listener would cause issue that the page just jumped back to initial state. why?
    displayContent(mainContent);
  }); //click event to display form

  birthdayButton.addEventListener("click", () => {
    const parentEl = document.querySelector("#age-section");
    deleteTextArea(parentEl); //check and delete if any existing text div

    const birthday = document.getElementById("birthday").value;
    const maxAge = document.getElementById("lifespan").value;
    const favFood = document.getElementById("fav-food").value;
    const dailyAmount = document.getElementById("daily-amount").value;
    const currentAge = calculateAge(birthday);
    const supply = calculateSupply(currentAge, maxAge, dailyAmount);
    let text; //set a variable to store text

      if (currentAge < 2 || currentAge > 80 || currentAge >= maxAge) {
        text = 'Sorry, your age is a myth that even Math cannot help!';
        showTextInDOM(parentEl, text); //filter edge case related to age
      }
      else if (maxAge > 100 || maxAge < 60) {
        text = 'I honestly think your expectation of your lifespan is rather bizzar.';
        showTextInDOM(parentEl, text); 
      } //filter edge case related to max age
      else if (favFood == '' || dailyAmount == '') {
        showTextInDOM(parentEl, promptInput); 
      } //filter empty fields
      else {
        text = `You are currently ${currentAge}. \n You will still need ${supply} ${favFood} if you would live up to ${maxAge}.`;
        showTextInDOM(parentEl, text);
      } //get the right result
 
  });

  circleButton.addEventListener("click", () => {
    const parentEl = document.getElementById("circle-section");
    deleteTextArea(parentEl); //check and delete if any existing text div

    const radius = document.getElementById("radius").value;
    const circumference = calcCircumference(radius);
    const area = calcArea(radius);
    let text;

    if (radius == '') {
      showTextInDOM(parentEl, promptInput); 
    } //filter empty field
    else if (radius < 0 || radius > 500) {
      text = 'Your number has overwhelmed me, please give a reasonable one.';
      showTextInDOM(parentEl, text);
    } //filter extreme values
    else {
      text = `This circle has ${circumference} of circumferent and ${area} of area.`;
      showTextInDOM(parentEl, text);
    } //get the right result
  });

  cToFButton.addEventListener("click", () => {
    const parentEl = document.getElementById("c-f-section");
    deleteTextArea(parentEl); //check and delete if any existing text div

    const celsiusValue = document.getElementById("c-f").value;
    const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
    let text;

    if (celsiusValue == '') {
      showTextInDOM(parentEl, promptInput); 
    } //filter empty field
    else {
      text = `${celsiusValue} celsius degree equals to ${fahrenheitValue}.`;
      showTextInDOM(parentEl, text);
    } //get the right result
  });

  fToCButton.addEventListener("click", () => {
    const parentEl = document.getElementById("f-c-section");
    deleteTextArea(parentEl); //check and delete if any existing text div

    const fahrenheitValue = document.getElementById("c-f").value;
    const celsiusValue = celsiusToFahrenheit(fahrenheitValue);
    let text;

    if (fahrenheitValue == '') {
      showTextInDOM(parentEl, promptInput); 
    } //filter empty field
    else {
      text = `${fahrenheitValue} celsius degree equals to ${celsiusValue}.`;
      showTextInDOM(parentEl, text);
    } //get the right result
  });