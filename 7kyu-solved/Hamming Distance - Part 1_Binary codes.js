function hammingDistance (a, b) {
    let n = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            n++;
        }
    }
    return n;
}

console.log(hammingDistance('100101', '101001'));