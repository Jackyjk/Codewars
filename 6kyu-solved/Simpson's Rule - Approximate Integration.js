function simpson (n) {
    let a = 0;
    let b = Math.PI;
    let f = x => {
        return (3 * Math.pow(Math.sin(x), 3)) / 2;
    };
    let res1 = 0.0,
        res2 = 0.0;
    var h = (b - a) / n;
    for (let i = 1; i <= n / 2; i++) {
        res1 += f(a + (2 * i - 1) * h);
    }
    for (let i = 1; i <= n / 2 - 1; i++) {
        res2 += f(a + 2 * i * h);
    }

    return ((b - a) * (f(a) + f(b) + 4 * res1 + 2 * res2)) / 3.0 / n;
}

console.log(simpson(290));