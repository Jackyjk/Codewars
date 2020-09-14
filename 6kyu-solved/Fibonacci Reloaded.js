function fib (n) {
    let a = 0, b = 1
    for (let i = 1; i < n; ++i) {
        [a, b] = [b, b + a]
    }
    return a
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
