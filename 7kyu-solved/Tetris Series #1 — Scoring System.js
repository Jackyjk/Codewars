function getScore (arr) {
    // your code here
    if (arr.length === 0) return 0
    let arr1 = [0, 40, 100, 300, 1200], sum = 0, count = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr1[arr[i]]
        count += arr[i]
        if (count >= 10) {
            for (let j = 0; j < arr1.length; j++) {
                arr1[j] = arr1[j] * (Number((count / 10).toFixed(0)) + 1)
            }
            count = 0
        }
    }
    return sum
}

console.log(getScore([0, 1, 2, 3, 4]))
console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3]))
console.log(getScore([0]))
console.log(getScore([]))
console.log(getScore([0, 1, 1, 3, 0, 2, 1, 2]));