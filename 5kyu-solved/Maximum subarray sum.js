function maxSequence (arr) {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        for (let sum = 0, j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum > max) max = sum
        }
    }
    return max
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));