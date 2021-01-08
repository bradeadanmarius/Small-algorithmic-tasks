myArray = ["mar", "banana", "kiwi", "orange", "avocado"]
function extractor(myArray) {
    arrayLength = myArray.length
    //arrayLength = arrayLength - 1  // finding the last position
    if (arrayLength % 2 == 0) {
        index = arrayLength / 2
    } else {
        index = (arrayLength - (arrayLength % 2)) / 2
    }
    return myArray[index]

}
console.log(extractor(myArray))

function extracor2(myArray) { return myArray[(myArray.length - myArray.length % 2) / 2] }
console.log(extracor2(myArray))