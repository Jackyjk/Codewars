function nextBigger (n) {
    const sortedDigits = n => ("" + n).split("").sort((a, b) => b - a);
    const max = +sortedDigits(n).join("");
    for (let i = n + 1; i <= max; i++) {
        if (max === +sortedDigits(i).join("")) return i;
    }
    return -1;
}

console.log(nextBigger(123));
// console.log(nextBigger(1));