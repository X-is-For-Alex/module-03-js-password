// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var chosenChar = [];


// Add event listener to generate button
generateBtn.addEventListener("click", initPasswordGen);


// user facing operations
function initPasswordGen(){
  var chosenChar = [];  // reset user defined character set to null
  var passwordText = document.querySelector("#password");

  // get user-defined password length:
  var pwdLength = Math.floor(prompt("Please indicate how long (min 8, max 128) you'd like your password to be:", 8));

  // verify user picked a valid number:
  if (pwdLength >= 8 && pwdLength <= 128) { 
    var lowerChoice =confirm("Please click OK if you would like your password to include lower case letters");
    var upperChoice = confirm("Please click OK if you would like your password to include UPPER case letters");
    var specialChoice = confirm("Please click OK if you would like your password to include special characters");
    var numberChoice = confirm("Please click OK if you would like your password to include numbers");

    // verify at least one character set is designated:
    if (!lowerChoice && !upperChoice && !specialChoice && !numberChoice) { 
      alert("You must pick at least one character set to generate a password!");
      initPasswordGen();
    }
    else {
      // build specified character set by calling this function and passing parameters:
      var charSet = buildCharArray(lowerChoice, upperChoice, specialChoice, numberChoice);

      // generate random password characters contained in the user-defined character set: 
      var password = generatePassword(pwdLength, charSet);

      // write password to page:
      passwordText.value = password; 
    }
  }
  else {
    alert("please enter a whole number between 8 and 128");
    initPasswordGen();
  }
}


// generate password here:
function generatePassword(pwdLength, charSet) {
  pwdChar = [];

  for (i=0; i < pwdLength; i++) {
    var randNum = generateRandomNumber(charSet.length);   // create random index number
    pwdChar.push(charSet[randNum]);   // match index number to character
  }
  var pwdChar = pwdChar.join('')
  return pwdChar;
}


// generate random number based on the size of user-defined character set here:
function generateRandomNumber(charLimit){
  var randomDigit = Math.floor(Math.random() * charLimit);
  return randomDigit;
}


// character array builder
function buildCharArray(optionLower, optionUpper, optionSpecial, optionNumber) {
  var chosenChar = [];

  if (optionLower) {
    chosenChar = chosenChar.concat(lowerChar);
  }
  if (optionUpper){
      chosenChar = chosenChar.concat(upperChar);
  }
  if (optionSpecial){
    chosenChar = chosenChar.concat(specialChar);
  }
  if (optionNumber){
    chosenChar = chosenChar.concat(numbers);
  }
  return chosenChar;
}