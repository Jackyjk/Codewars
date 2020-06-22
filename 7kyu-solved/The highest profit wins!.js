const sort = (a, b) => a - b
const minMax = arr => arr.length > 1 ? [arr.sort(sort)[0], arr.sort(sort)[arr.length - 1]] : [arr.sort(sort)[0], arr.sort(sort)[0]]

console.log(minMax([1, 2, 3, 4, 5]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))