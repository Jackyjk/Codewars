/**
 *
 * pyramid(0) => [ ]
 * pyramid(1) => [ [1] ]
 * pyramid(2) => [ [1], [1, 1] ]
 * pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
 *
 * @param {*} n
 */
function num (n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(1)
    }
    return arr
}

function pyramid (n) {
    // your code here
    if (n === 0) return []
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(num(i))
    }
    return arr
}

console.log(pyramid(0))
console.log(pyramid(1))
console.log(pyramid(2))
console.log(pyramid(4))