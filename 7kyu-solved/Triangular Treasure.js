// Return the nth triangular number
function triangular (n) {
    if (n <= 0) return 0
    let sum = 0
    for (let i = 0; i <= n; i++) sum += i
    return sum
}


console.log(triangular(2));
console.log(triangular(4));