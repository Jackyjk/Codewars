// Example 1: Input: {1, 2, 3}, 3 --> (1 ^ 3 + 2 ^ 3 + 3 ^ 3 ) - (1 + 2 + 3) --> 36 - 6 --> Output: 30

// Example 2: Input: {1, 2}, 5 --> (1 ^ 5 + 2 ^ 5) - (1 + 2) --> 33 - 3 --> Output: 30

function nCalc (num, n) {
    let sum = 1;
    for (let i = 0; i < n; i++) {
        sum *= num;
    }
    return sum
}

function modifiedSum (a, n) {
    // Write your code here
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < a.length; i++) {
        sum1 += a[i]
    }
    for (let i = 0; i < a.length; i++) {
        sum2 += nCalc(a[i], n)
    }
    return sum2 - sum1;
}

console.log(modifiedSum([1, 2, 3], 3));