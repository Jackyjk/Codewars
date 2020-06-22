function persistence (num) {
    var number = 0
    num = num.toString()
    while (num.length > 1) {
        number++;
        num = num
            .split("")
            .map(Number)
            .reduce((a, b) => a * b)
            .toString();
    }
    return number
}

console.log(persistence(999));
console.log(persistence(39));
console.log(persistence(4));