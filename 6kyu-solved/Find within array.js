var findInArray = (array, iterator) => array.map((v, i) => iterator(v, i)).indexOf(true)

//* const findInArray = (array, iterator) => array.findIndex(iterator)

var trueIfEven = function (v, i) { return v % 2 === 0; }
var neverTrue = function (v, i) { return false; }
var trueIfValueEqualsIndex = function (v, i) { return v === i; }
var trueIfLengthEqualsIndex = function (v, i) { return v.length === i; }

console.log(findInArray([], trueIfEven));
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven));
console.log(findInArray([2, 4, 6, 8], trueIfEven));
console.log(findInArray([2, 4, 6, 8], neverTrue));