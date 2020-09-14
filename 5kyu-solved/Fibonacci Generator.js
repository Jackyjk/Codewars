function genfib () {
    let a = 1, b = 0;
    return function fib () {
        [a, b] = [b, b + a]
        return a;
    }
}

var fib = genfib()
console.log(fib())      //0
console.log(fib())      //1
console.log(fib())      //1
console.log(fib())      //2
console.log(fib())      //3