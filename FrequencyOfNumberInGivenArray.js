gNumber = 2
array = [2, 4, 5, 2, 1, 2]
function frequency(gNumber, array) {
    freq = 0
    for (k = 0; k <= (array.length - 1); k++) {
        if (array[k] == gNumber) {
            freq++
        }
    }
    return freq
    //console.log(freq)
}
//frequency(gNumber, array)
result = frequency(gNumber, array)
console.log(result)