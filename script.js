// Assignment Code
var generateBtn = document.querySelector("#generate")

// VARIABLES
var passwordLength = 0
var passwordIncludesLowerCase = ''
var passwordIncludesUpperCase = ''
var passwordIncludesNumbers = ''
var passwordIncludesSpecialChar = ''
var generatedPassword = []

// Arrays to pull data from
var lowercaseArray = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
var uppercaseArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharArray = [
  '!','"','#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\'', ']', '^', '_', '`', '{', '|', '}', '~'
]


// Write password to the #password input
function writePassword() {
  getUserPrompts()
  convertToBoolean()
  var password = generatePassword(passwordLength, passwordIncludesLowerCase, passwordIncludesUpperCase, passwordIncludesNumbers, passwordIncludesSpecialChar)
  var passwordText = document.querySelector("#password")

  passwordText.value = password
  resetPromptValues()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword (
  passwordLength, 
  passwordIncludesLowerCase, 
  passwordIncludesUpperCase, 
  passwordIncludesNumbers, 
  passwordIncludesSpecialChar) {
  // IF PASSWORD LENGTH TOO LOW OR FALSY
  if (!passwordLength || passwordLength < 8) {
    confirm("Password length is too short! Password should be between 8-128 characters. Generate password again")
    return
  } else if (passwordLength > 128) {
    confirm("Password length is too long! Password should be between 8-128 characters. Generate password again")
    return
  }

  // BUILD THE ARRAY TO PULL VALUES FROM
  var charactersArray = []
  var tokensArray = []
  if (passwordIncludesLowerCase) {
    charactersArray = [...lowercaseArray]
    tokensArray.push({isTrue: true, value: lowercaseArray})
  } else {
    tokensArray.push({isTrue: false, value: lowercaseArray})
  }

  if (passwordIncludesUpperCase) {
    charactersArray = [...charactersArray, ...uppercaseArray]
    tokensArray.push({isTrue: true, value: uppercaseArray})
  } else {
    tokensArray.push({isTrue: false, value: uppercaseArray})
  }

  if (passwordIncludesNumbers) {
    charactersArray = [...charactersArray, ...numbersArray]
    tokensArray.push({isTrue: true, value: numbersArray})
  } else {
    tokensArray.push({isTrue: false, value: numbersArray})
  }

  if (passwordIncludesSpecialChar) {
    charactersArray = [...charactersArray, ...specialCharArray]
    tokensArray.push({isTrue: true, value: specialCharArray})
  } else {
    tokensArray.push({isTrue: false, value: specialCharArray})
  }

  // IF ALL VALUES ARE FALSY, RESTART
  if (charactersArray.length < 1) {
    confirm("Selectors are missing. Generate password again and please select your password's parameters")
    return
  } 
  // IF TRUTHY, LOOP AND GENERATE PASSWORD
  else {
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = randomNumber(charactersArray.length - 1)
      generatedPassword.push(charactersArray[randomIndex])
    }

    // CHECK IF PASSWORD INCLUDES ALL OPTIONS
    var isConditionMet = false 
    tokensArray.forEach( (token, index) => {
      // token.isTrue === the option was selected
      if (token.isTrue) {
        token.value.forEach(value => {
          if (generatedPassword.includes(value)) {
            isConditionMet = true
          }
        })

        if (isConditionMet === false) {
          var newRandomIndex = randomNumber(token.value.length - 1)
          generatedPassword.splice((-1 - index), 1, token.value[newRandomIndex])
        } else {
          isConditionMet = false
        }
      } 
    })

    // return value for password to appear
    generatedPassword = generatedPassword.join("")
    return generatedPassword
  }
}
// END OF GENERATE PASSWORD FUNCTION

// FUNCTIONS
function getUserPrompts () {
  // chooose character between 8-128
  passwordLength = parseInt(prompt("How long would you like this password to be? (number between 8-128)", "8"))
  // choose lower case
  passwordIncludesLowerCase = prompt("Include lower case letters? (Y or N)", "Y").toUpperCase()
  // choose upper case
  passwordIncludesUpperCase = prompt("Include upper case letters? (Y or N)", "Y").toUpperCase()
  // choose numeric
  passwordIncludesNumbers = prompt("Include numbers? (Y or N)", "Y").toUpperCase()
  // choose special characters 
  passwordIncludesSpecialChar = prompt("Include special characters? (Y or N", "Y").toUpperCase()
}

function convertToBoolean() {
  if (passwordIncludesLowerCase === 'N') passwordIncludesLowerCase = false
  if (passwordIncludesUpperCase === 'N') passwordIncludesUpperCase = false
  if (passwordIncludesNumbers === 'N') passwordIncludesNumbers = false
  if (passwordIncludesSpecialChar === 'N') passwordIncludesSpecialChar = false
}

function randomNumber (int) {
  return Math.floor(Math.random() * int + 1)
}

function resetPromptValues () {
  passwordLength = 0
  passwordIncludesLowerCase = ''
  passwordIncludesUpperCase = ''
  passwordIncludesNumbers = ''
  passwordIncludesSpecialChar = ''
  generatedPassword = []
}