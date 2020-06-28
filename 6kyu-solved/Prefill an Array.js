function prefill (n, v) {
    let arr = []
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`)
    else {
        for (let i = 0; i < n; i++) {
            arr.push(v)
        }
    }
    return arr
}

console.log(prefill(3, 1))
console.log(prefill('1', 1))
console.log(prefill('xyz', 1))
console.log(prefill(3, 'asd'))
console.log(prefill(3, prefill(2, '2d')))