var moveZeros = function (arr) {
    // TODO: Program me
    let finalArr = []
    let zeroNum = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] !== 0 ? finalArr.push(arr[i]) : (zeroNum++)
    }
    for (let i = 0; i < zeroNum; i++) {
        finalArr.push(0)
    }
    return finalArr
}

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));