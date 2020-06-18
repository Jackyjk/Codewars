// function sum (arr) {
//     return arr.reduce(function (prev, curr, idx, arr) {
//         return prev + curr;
//     });
// }

// function sumOfMinimums (arr) {
//     // your code here
//     let num = []
//     sort = (a, b) => a - b
//     for (let i = 0; i < arr.length; i++) {
//         arr[i].sort()
//         num.push(arr[i][0])
//     }
//     return sum(num)
// }

const sumOfMinimums = (array) => array.reduce((total, subarray) => total + Math.min(...subarray), 0)


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));