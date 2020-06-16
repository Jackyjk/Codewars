var isSqr = n => (parseInt)(Math.sqrt(n) + 0.5) * (parseInt)(Math.sqrt(n) + 0.5) == n;

function solve (n) {
    //..
    if (n === 4) return -1
    for (let i = 1; i <= 5000000; i++) {
        if (isSqr(n + i * i)) {
            return i * i
        }
    }
    return -1
}

console.log(solve(3));
console.log(solve(4));
console.log(solve(5));
console.log(solve(7));
console.log(solve(9));
console.log(solve(13));
console.log(solve(88901));