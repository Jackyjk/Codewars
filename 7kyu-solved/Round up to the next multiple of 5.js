function roundToNext5 (n) {
    // ...
    let num = n;
    if (n < 0) num = -num;
    if (n === -1 || n === 0) return 0
    for (let i = 1; ; i++) {
        if (num <= 5 * i) return n > 0 ? 5 * i : (num - 5*(i-1) <= 3) ? -5 * (i - 1) : -5 * i
    }
}

console.log(roundToNext5(-1));
console.log(roundToNext5(-2));
console.log(roundToNext5(0));
console.log(roundToNext5(1));
console.log(roundToNext5(3));
console.log(roundToNext5(4));
console.log(roundToNext5(7));
console.log(roundToNext5(34));
console.log(roundToNext5(-1281222));
console.log(roundToNext5(1281222));
