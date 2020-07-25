function findNb (m) {
    // your code
    let sum = 0
    for (let i = 1; ; i++) {
        sum += Math.pow(i, 3)
        if (sum == m) return i
        else if (i > 10000) return -1
    }
}


console.log(findNb(1071225));
console.log(findNb(91716553919377));

function findNb (m) {
    var n = 0
    while (m > 0) m -= ++n ** 3
    return m ? -1 : n
}

// function test (n) {
//     let sum = 0
//     for (let i = 1; i <= n; i++) {
//         sum += Math.pow(i, 3)
//     }
//     return sum
// }

// console.log(test(45));