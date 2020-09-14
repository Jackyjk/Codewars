function* fibonacci () {
    let a = 0
    let b = 1
    while (true) {
        yield a;
        [a, b] = [a + b, a]
    }
}

var fib = fibonacci()
console.log(fib.next().value)
console.log(fib.next().value)
console.log(fib.next().value)