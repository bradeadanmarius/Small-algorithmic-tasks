gNumber = 1
array = [2, 3, 4]
function addNumber(gNumber, array) {
    for (k = (array.length - 1); k >= 0; k--) {
        array[k + 1] = array[k]
    }
    array[0] = gNumber
}

addNumber(gNumber, array)
console.log(array)