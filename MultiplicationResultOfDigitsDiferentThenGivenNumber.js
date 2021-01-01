const givenNumber = 7;
let theNumber = 2787;
function multiResOfDi(givenNumber, theNumber) {
  let multiplication = 1;
  while (theNumber > 0) {
    lastDigit = theNumber % 10;
    theNumber = (theNumber - (theNumber % 10)) / 10;
    if (givenNumber != lastDigit) {
      multiplication = multiplication * lastDigit;
    }
  }
  return multiplication;
}
console.log(multiResOfDi(givenNumber, theNumber));