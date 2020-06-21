function myNum (num) {
    let arr = [1]
    for (let i = 1; i < num; i++) {
        arr[i] = arr[i - 1] + 3
    }
    return arr
}

function SeriesSum (n) {
    // Happy Coding ^_^
    if (n == 0) return n.toFixed(2)
    let arr = myNum(n)
    let finalNum = 0
    for (let i = 0; i < arr.length; i++) {
        finalNum += 1 / arr[i]
    }
    return finalNum.toFixed(2)
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));