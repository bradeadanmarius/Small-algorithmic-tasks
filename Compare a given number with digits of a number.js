// Checking if the digits of a number are smaller or equal to the given number

const gNumber = 3;
let number = 124;

function smallerOrEqual(number, gNumber) {
  while (number > 0) {
    lastDigit = number % 10;
    number = (number - (number % 10)) / 10;
    console.log(number);
    if (!(lastDigit <= gNumber)) {  // (lastDigit > gNumber)
      // return true
      return false
    } 
  }
  return true;
}

console.log(smallerOrEqual(number, gNumber));