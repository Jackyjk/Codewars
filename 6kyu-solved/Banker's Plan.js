function fortune (f0, p, c0, n, i) {
    for (let j = 1; j < n; ++j) {
        f0 = Math.floor(f0 * (1 + p / 100)) - c0
        c0 = Math.floor(c0 * (1 + i / 100))
    }
    return f0 >= 0
}

console.log(fortune(100000, 1, 2000, 15, 1));