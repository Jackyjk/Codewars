//* Mine 
// function flatten (...arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         arr = [].concat(...arr);
//     }
//     return arr;
// }

//!  Amazing !!!!   
const flatten = (...arr) => arr.toString().split(",")
console.log(flatten(1, [2, 3], 4, 5, [6, [7]]));
console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));