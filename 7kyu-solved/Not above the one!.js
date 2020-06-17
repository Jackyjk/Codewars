function binaryCleaner (arr) {
    let newArr = []
    let indexArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 1) {
            newArr.push(arr[i])
        } else {
            indexArr.push(i)
        }
    }
    return [newArr, indexArr]
}
console.log(binaryCleaner([0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 4, 5, 6, 2, 1, 1, 0]));


const test = arr => [
    arr.filter(n => n < 2),
    arr.map((n, i) => i).filter((n, i) => arr[i] > 1)
]
console.log(test([0, 1, 2, 1, 0, 2, 1, 1, 1, 0, 4, 5, 6, 2, 1, 1, 0]));