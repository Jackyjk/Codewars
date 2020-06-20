const sort = (a, b) => a - b
const sumTwoSmallestNumbers = numbers => numbers.sort(sort)[0] + numbers.sort(sort)[1]

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));