const _ = require('lodash');
const moment = require('moment');

// Function 1: Generate a random alphanumeric string of given length
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function 2: Capitalize the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
  return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

// Function 3: Calculate the factorial of a number
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

// More functions can be added here...

module.exports = {
  generateRandomString,
  capitalizeFirstLetter,
  factorial
  // Add more exported functions here...
};
