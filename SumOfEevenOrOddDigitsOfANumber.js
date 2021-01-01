const myNumber = 123;
function sumOfEvenDigits(number) {
  let sumOfEvenDigits = 0;
  while (number > 0) {
    lastDigit = number % 10;
    number = (number - (number % 10)) / 10;
    if (lastDigit % 2 == 0) {
      sumOfEvenDigits = sumOfEvenDigits + lastDigit;
    }
  }
  return sumOfEvenDigits;
}

function sumOfOddDigits(number) {
  let sumOfOddDigits = 0;
  while (number > 0) {
    lastDigit = number % 10;
    number = (number - (number % 10)) / 10;

    if (lastDigit % 2 != 0) {
      sumOfOddDigits = sumOfOddDigits + lastDigit;
    }
  }
  return sumOfOddDigits;
}
console.log(sumOfOddDigits(myNumber));
console.log(sumOfEvenDigits(myNumber));
