// Get reference to the check button, clear button, and results div
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Add event listener to the check button
checkBtn.addEventListener("click", () => {
  // Get the value of the user input and trim any leading or trailing whitespace
  const userInput = document.getElementById("user-input").value.trim();

  // Check if the user input is empty
  if (!userInput) {
    // If the input is empty, show an alert message
    alert("Please provide a phone number");
    return;
  }

  // Regular expression to validate Norwegian phone numbers
  const regex = /^((\+|00)47)?\s?(\d{2}|\d{3})\s?\d{2}\s?\d{3}$/;

  // Check if the user input matches the regular expression
  if (regex.test(userInput)) {
    // If the input is valid, display it in the results div as a valid Norwegian number
    resultsDiv.textContent = `Valid Norwegian number: ${userInput}`;
  } else {
    // If the input is not valid, display it in the results div as an invalid Norwegian number
    resultsDiv.textContent = `Invalid Norwegian number: ${userInput}`;
  }
});

// Add event listener to the clear button
clearBtn.addEventListener("click", () => {
  // Clear the user input field and the content of the results div
  document.getElementById("user-input").value = "";
  resultsDiv.textContent = "";
});
