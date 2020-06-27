function threeAndFive () {
    let arr = []
    for (let i = 0; i < 10000; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            arr.push(i)
        }
    }
    return arr
}

function findSum (n) {
    let arr = []
    arr = threeAndFive()
    let sum = 0
    for (let i = 0; i < n; i++) {
        if (n >= arr[i]) sum += arr[i]
    }
    return sum
}

console.log(findSum(5));

