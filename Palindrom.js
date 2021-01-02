const gNumber = 121;
function numberOfDigits(gNumber) {
  // Finding out the number of digits in a number
  counter = 0;
  if (gNumber == 0) {
    return 1;
  }
  while (gNumber > 0) {
    gNumber = (gNumber - (gNumber % 10)) / 10;
    counter = counter + 1;
  }
  return counter;
}

// function gNumberReverse(gNumber) {                   // Finding the reverse of the given number (gNumber)
//   newNumber = 0;
//   numberOfDigits = numberOfDigits(gNumber);
//   numberOfDigits = numberOfDigits-1                  // Alternative, decrementing the number of digits before the loop
//   while (numberOfDigits >= 0) {
//     lastDigit = gNumber % 10;
//     gNumber = (gNumber - (gNumber % 10)) / 10;
//     newNumber = lastDigit * Math.pow(10, numberOfDigits) + newNumber;
//     numberOfDigits = numberOfDigits - 1;
//   }
//   return newNumber;
// }

// function gNumberReverse(gNumber) {                   // Finding the reverse of the given number (gNumber)
//   newNumber = 0;
//   numberOfDigits = numberOfDigits(gNumber);
//   while (numberOfDigits > 0) {
//     numberOfDigits = numberOfDigits - 1;             // Decrementing the number from the beginning of the while loop
//     lastDigit = gNumber % 10;
//     gNumber = (gNumber - (gNumber % 10)) / 10;
//     newNumber = lastDigit * Math.pow(10, numberOfDigits) + newNumber;
//   }
//   return newNumber;
// }

function gNumberReverse(gNumber) {
  newNumber = 0;
  numberOfDigits = numberOfDigits(gNumber);
  while (numberOfDigits > 0) {
    lastDigit = gNumber % 10;
    gNumber = (gNumber - (gNumber % 10)) / 10;
    newNumber = lastDigit * Math.pow(10, numberOfDigits - 1) + newNumber; // Decrementing the number of digits inside the declaration of the       new reversed number
    numberOfDigits = numberOfDigits - 1;
  }
  return newNumber;
}

function isPalindrome(gNumber) {
  // Checking to see if the given number is the same as the new number
  newNumber = gNumberReverse(gNumber);
  if (newNumber != gNumber) {
    return false;
  } else {
    return true;
  }
}

console.log(numberOfDigits(gNumber));
console.log(gNumberReverse(gNumber));
//console.log(isPalindrome(gNumber));
