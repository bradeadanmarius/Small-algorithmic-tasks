const myNumber = 258;
function numberOfDigitsDividableBy3(number) {
  let counter = 0;
  while (number > 0) {
    lastDigit = number % 10;
    number = (number - (number % 10)) / 10;
    if (lastDigit % 3 == 0) {
      counter = counter + 1;
    }
  }
  return counter;
}
console.log(numberOfDigitsDividableBy3(myNumber));
