function multiples (m, n) {
    // code here
    let arr = []
    for (let i = 1; i <= m; i++) {
        arr.push(i*n)
    }
    return arr
}

console.log(multiples(3, 5));