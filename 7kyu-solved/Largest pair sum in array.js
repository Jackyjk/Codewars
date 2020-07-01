const largestPairSum = numbers => numbers.sort((a, b) => b - a)[0] + numbers.sort((a, b) => b - a)[1]


console.log(largestPairSum([-10, -8, -16, -18, -19]))
console.log(largestPairSum([10, 14, 2, 23, 19]))