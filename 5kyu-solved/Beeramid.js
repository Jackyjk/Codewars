// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
    for (let i = 1, j = 1; ; i += 1, j = j + Math.pow(i, 2)) {
        if (bonus < (price * j)) return i - 1
    }
    return 0
}

console.log(beeramid(9, 2))
console.log(beeramid(10, 2));
console.log(beeramid(11, 2));
console.log(beeramid(21, 1.5));