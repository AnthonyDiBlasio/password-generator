// Assignment Code
function generatePassword() {
  // Created arrays matching criteria for password (lowercase,uppercase,numbers,symbols)to add to an open array to generate password.
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var passwordArray = [];
  var passwordLength = getPasswordLength();

  var charType = false;
  // I created a while loop to repeat this loop ensuring the user submits the correct criteria.
  while (charType == false) {
    var lowerCase = getChoice("lowercase");
    var upperCase = getChoice("uppercase");
    var num = getChoice("number");
    var specialC = getChoice("symbol");
    if ((lowerCase) || (upperCase) || (num) || (specialC)) {
      charType = true;
    } else {
      alert("You must select at least one character type.")
    }
  }

  // These if statements determine the user choices and then append them to the blank array I created.
  if (lowerCase) {
    passwordArray = passwordArray.concat(lower);
  }
  if (upperCase) {
    passwordArray = passwordArray.concat(upper);
  }
  if (num) {
    passwordArray = passwordArray.concat(numArray);
  }
  if (specialC) {
    passwordArray = passwordArray.concat(symbolSet);
  }

  var passString = "";
  // This  for loop will take the appended array, randomly select elements from it, then append the selections to a string, generating the password.
  for (var i = 0; i < passwordLength; i++) {
    passString += passwordArray[Math.floor(Math.random() * (passwordArray.length))];
  }

  return passString;
}
// this function generates the password length using a while loop and an "or" statement
function getPasswordLength() {
  var choice = 0;
  while ((choice < 8) || (choice > 128)) {
    choice = parseInt(prompt("Enter the number for length of password between 8 and 128: "));

    // if statement to see if user inputs a number
    if (isNaN(choice)) {
      // number set to 0 to reset the loop if number is not inputed.
      choice = 0;
    }
  }

  return choice;
}

// function to represent the prompt portion of readme. asks user to enter a "y" or "n" to select which character options they want in password
function getChoice(Option) {
  var choice = "a",
    Prompt = "";
  var Prompt = ('Would you like '.concat(Option));
  Prompt = Prompt.concat(' characters (y/n)?');
  // This loop ensures the user enters a valid response. resets if not valid
  while (choice = "a") {
    choice = (prompt(Prompt));
    if (choice == "y") {
      return true;
    } else if (choice == "n") {
      return false;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);