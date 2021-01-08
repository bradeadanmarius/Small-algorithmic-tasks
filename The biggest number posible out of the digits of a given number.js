gNumber = 58622
function theBiggestNumberFromDigitsOfGivenNumber(gNumber) { //creating the function
    array = []    // declaring the array variable to store the digits of the number
    newNumber = 0  // initializing the new number to 0
    while (gNumber > 0) {
        lastDigit = gNumber % 10   // finding the last digit
        gNumber = (gNumber - (gNumber % 10)) / 10  // getting rid of the last digit and initializing the g number with the new value
        array.push(lastDigit)  // adding the last digit to the empty array
    }
    array.sort()  // sorting the array from smallest to the biggest
    arrayLength = array.length  // storing the length of the array in the variable with the same name
    arrayLength = arrayLength - 1  // finding the index of the last element in the array
    console.log(array)
    console.log(array[arrayLength])
    // we need to go thru the array from the last element to the first element
    // index is initialized with the index of the last element of the array and we decrement it till it reaches 0
    for (index = arrayLength; index >= 0; index--) {
        newNumber = newNumber * 10 + array[index] // we set the value of newNumber by multiplying the value of the last element in the array by 10 and adding the new digit
    }
    console.log(newNumber)
}
theBiggestNumberFromDigitsOfGivenNumber(gNumber)