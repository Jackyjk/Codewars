function isPrime (num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) count++
    }
    return count == 2
}

function prime (num) {
    // Generate an array containing every prime number between 0 and the num specified (inclusive)
    let arr = []
    if (num == 0 || num == 1) return []
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) arr.push(i)
    }
    return arr
}

console.log(prime(11));
console.log(prime(23));


