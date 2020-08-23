const sum = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue);
const repeats = arr => sum([].concat(...new Set(arr))) - (sum(arr) - sum([].concat(...new Set(arr))))


console.log(repeats([4, 5, 7, 5, 4, 8]));
console.log(repeats([9, 10, 19, 13, 19, 13]));