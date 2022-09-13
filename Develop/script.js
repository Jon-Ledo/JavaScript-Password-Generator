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
  // Arrays to pull data from
  var alphabetArray = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]
  var numbersArray = [0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9]
  var specialCharArray = [
    '!','"','#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']', '^', '_', '`', '{', '|', '}', '~'
  ]
   var generatedPassword = []

// Series of prompts to decide password strength
// when prompted;
  // chooose character between 8-128
  var passwordLength = parseInt(prompt("How long would you like this password to be? (number between 8-128)", "8"))
  // choose lower case
  var passwordIncludesLowerCase = prompt("Include lower case letters? (Y or N)", "Y")
  // choose upper case
  var passwordIncludesUpperCase = prompt("Include upper case letters? (Y or N)", "Y")
  // choose numeric
  var passwordIncludesNumbers = prompt("Include numbers? (Y or N)", "Y")
  // choose special characters 
  var passwordIncludesSpecialChar = prompt("Include special characters? (Y or N", "Y")

// when prompts are answered;
  // input should be validated and at least one character type should be selected

  // if ()

// when all prompts answered, generate the password
  for (var index = 0; index < passwordLength; index++) {
    // if (passwordIncludesLowerCase.toUpperCase() === 'Y'){
    //   generatedPassword.push(passwordIncludesLowerCase)
    // }    
    
  }
  // return value and pw should appear on screen
  return generatedPassword
}