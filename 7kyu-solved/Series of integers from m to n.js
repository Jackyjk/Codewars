function generateIntegers (m, n) {
    var arr = [];
    for (let i = m; i <= n; i++) {
        arr.push(i);
    }
    return arr
}

console.log(generateIntegers(2, 5));