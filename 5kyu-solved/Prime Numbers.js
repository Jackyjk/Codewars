function isPrime (number) {
    for (let i = 2; i <= Math.floor(number / 2); i++) {
        if (number % i == 0) return false;
    }
    return number >= 2;
}

function getPrimes (start, finish) {
    let arr = []
    if (start > finish) [start, finish] = [finish, start]

    for (let i = start; i <= finish; i++) {
        if (isPrime(i)) arr.push(i);
    }
    return arr;
}

console.log(isPrime(3));
console.log(isPrime(8));
console.log(isPrime(11));
console.log((getPrimes(0, 30).join()))
console.log((getPrimes(30, 0).join()))