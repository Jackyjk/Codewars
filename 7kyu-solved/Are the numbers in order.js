function inAscOrder (arr) {
    let flag = false
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) return false
        else {
            flag = true
        }
    }
    return flag
}



console.log(inAscOrder([1, 2, 4, 7, 19]))
console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))