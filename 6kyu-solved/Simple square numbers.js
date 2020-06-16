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


function solve1 (n) {
    let i = 1
    while (i < n) {
        if ((Math.sqrt(((i * i) + n)) % 1) === 0) {
            return i * i
        }
        i++
    }
    return -1
}

console.log(solve1(9));
console.log(solve1(13));
console.log(solve1(88901));