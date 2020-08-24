function per (n) {
    let arr = [];
    for (let i = 0; ; i++) {
        if (n.toString().length === 1) {
            break;
        }
        n = n
            .toString()
            .split("")
            .reduce((a, b) => a * b * 1, 1);
        arr.push(n);
    }
    return arr;
}

console.log(per(277777788888899));
console.log(per(50));