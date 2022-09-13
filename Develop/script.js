// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword () {
  // Series of prompts to decide password strength
  // when prompted;
    // chooose character between 8-128
    // choose lower casse
    // choose upper case
    // choose numeric
    // choose special characters 

  // when prompts are answered;
    // input should be validated and at least one character type should be selected
  
  // when all prompts answered, generate the password
  // return value and pw should appear on screen
}