const flatten = (array) => Array.isArray(array) ? array.reduce((a, c) => a.concat(flatten(c)), []) : array

const flattenTwoLevels = (array) => array.map(second => flatten(second))

console.log(flattenTwoLevels([1, [2, 3, [], [4, [], 5]]]));