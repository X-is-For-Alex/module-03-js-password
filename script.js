// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ";", ":", ",", "<", ".", ">", "/", "?"];
var numbers = [];

var pwdLength = 15;

// Write password to the #password input
function writePassword() {
  var password = initPasswordGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;  // write password to page
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// user facing operations
function initPasswordGen(){
  console.log("initiating random password generator");
  var pwdLength = Math.floor(prompt("Please indicate how long (min 8, max 128) you'd like your password to be:", 8));
  
  console.log(`password length set to: ${pwdLength}`);

  if (pwdLength >= 8 && pwdLength <= 128) {
    console.log("password length is a valid number");
    generatePassword(pwdLength);
  } else {
    console.log("password length is NOT a valid number");
    alert("please enter a whole number between 8 and 128");
    initPasswordGen();
  }
}


// generate password here:
function generatePassword(pwdLength) {
  console.log(`initiating random number generator with length set to: ${pwdLength}`);
  var chosenChar = [].concat(upperChar, lowerChar);
  console.log(chosenChar.length);
  pwdChar = [];

  for (i=0; i < pwdLength; i++) {
    var randNum = generateRandomNumber(chosenChar.length);
    pwdChar.push(chosenChar[randNum]);
  }
  console.log(pdwChar.join(''));
  return pdwChar.join('');
}

function generateRandomNumber(limit){
  var randomDigit = Math.floor(Math.random() * limit);
  return randomDigit;
}