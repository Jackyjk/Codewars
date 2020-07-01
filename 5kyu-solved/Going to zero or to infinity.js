function test (n) {
    let num = 1
    for (let i = 1; i <= n; i++) {
        num *= i
    }
    return num
}
//! Precision issue
// function going (n) {
//     // your code
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += test(i)
//     }
//     let count = 1
//     let sumStr = (((1 / test(n)) * sum).toFixed(7) + '')
//     for (let i = sumStr.split(".")[1].length; i > 0; i--) {
//         if (sumStr[i] === '0') {
//             count++
//         } else {
//             break
//         }
//     }
//     return Number(Number(sumStr).toFixed(6 - count + 1))
// }

//! Has NaN
// function going (n) {
//     // your code
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += test(i)
//     }
//     let num = (1 / test(n)) * sum
//     return parseFloat(num.toString().substring(0, 8))
// }

//* Final Soultion
function going (n) {
    let result = 1,
        accumulate = 1;
    for (let i = n; i > 1; i--) {
        accumulate /= i;
        result += accumulate;
    }
    return parseFloat(result.toString().substring(0, 8));
}

console.log(going(5))
console.log(going(6))
console.log(going(7))