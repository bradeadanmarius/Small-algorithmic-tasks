const myNumber = 289;
function multiplicationOfDigits(number) {
  multiplication = 1;
  while (number > 0) {
    lastDigit = number % 10;
    number = (number - (number % 10)) / 10;
    multiplication = multiplication * lastDigit;
  }
  return multiplication;
}
console.log(multiplicationOfDigits(myNumber));
