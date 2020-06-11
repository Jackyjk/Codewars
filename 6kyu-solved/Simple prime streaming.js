function isPrime (num) {
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) { return false }
    }
    return true
}

function solve (a, b) {
    let result = '';
    let num = 2;
    while (result.length < a + b) {
        if (isPrime(num)) { result += num.toString(); }
        num++;
    }
    return result.slice(a, a + b);
}