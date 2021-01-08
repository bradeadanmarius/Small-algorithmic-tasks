gNumber = 58622
function frequencyOfDigitsInGivenNumber(gNumber) {
    frequency = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    while (gNumber > 0) {
        lastDigit = gNumber % 10
        gNumber = (gNumber - (gNumber % 10)) / 10
        frequency[lastDigit] = frequency[lastDigit] + 1
    }
    for (position = 9; position >= 0; position--) {
        console.log(frequency[position])
    }
    //console.log(frequency)
}
frequencyOfDigitsInGivenNumber(gNumber)