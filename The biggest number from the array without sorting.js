myArr = [2, 5, 6, 1, 8]  // we assume that all numbers are positive and bigger then 0
function findIndex(myArr) {
    indexOfBig = 0
    maxNumber = myArr[0]
    for (index = 0; index <= (myArr.length - 1); index++) {
        //console.log(myArr[index])
        if (myArr[index] > maxNumber) {
            maxNumber = myArr[index]
        }
    }
    return maxNumber
}
console.log(findIndex(myArr))
