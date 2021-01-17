gNumber = 1
array = [2, 3, 4, 5]
function addNumber(gNumber, array) {
    if (array.length % 2 == 0) {
        y = (array.length / 2)
    } else {
        y = (array.length - (array.length % 2)) / 2
    }
    for (k = (array.length - 1); k >= y; k--) {
        array[k + 1] = array[k]
    }
    array[y] = gNumber


}
addNumber(gNumber, array)
console.log(array)