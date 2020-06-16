
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var normIndex = (array, index) => (index % array.length >= 0) ? (array[index % array.length]) : array[array.length - (-(index % array.length))]


console.log(normIndex(array, Math.round(Math.random() * 40 + 10)));
console.log(normIndex(array, Math.round(Math.random() * -40 - 10)));