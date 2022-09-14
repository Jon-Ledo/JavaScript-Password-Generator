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
  var passwordIncludesLowerCase = prompt("Include lower case letters? (Y or N)", "Y").toUpperCase()
  // choose upper case
  var passwordIncludesUpperCase = prompt("Include upper case letters? (Y or N)", "Y").toUpperCase()
  // choose numeric
  var passwordIncludesNumbers = prompt("Include numbers? (Y or N)", "Y").toUpperCase()
  // choose special characters 
  var passwordIncludesSpecialChar = prompt("Include special characters? (Y or N", "Y").toUpperCase()

// when prompts are answered;
  // input should be validated and at least one character type should be selected

  // if ()

// when all prompts answered, generate the password
  for (var index = 0; index < passwordLength; index++) {
    // all 4 options included
    if (passwordIncludesLowerCase === 'Y' &&
      passwordIncludesUpperCase === 'Y' &&
      passwordIncludesNumbers === 'Y' && 
      passwordIncludesSpecialChar === 'Y') {
        var combinedArrays = [...alphabetArray, ...numbersArray, ...specialCharArray]
        var randomIndex = randomNumber(combinedArrays.length - 1)
        // random determine if upper or lower case used
        var toLowerOrUpperCase = randomNumber(2)

        if (randomIndex < 26) { // 26 === alphabet letters
          if (toLowerOrUpperCase === 1) {
            generatedPassword.push(combinedArrays[randomIndex].toLowerCase())
          } else {
            generatedPassword.push(combinedArrays[randomIndex].toUpperCase())
          }
        } else {
          generatedPassword.push(combinedArrays[randomIndex])
        }
      }

    
  }
  // return value for pw to appear
  generatedPassword = generatedPassword.join("")
  return generatedPassword
}

function randomNumber (int) {
  return Math.floor(Math.random() * int + 1)
}