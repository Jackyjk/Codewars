function reverseFibo (n) {
    // insert your code here
    if (n < 3) return n == 2 ? '10' : n == 1 ? '0' : ''
    let arr = [0, 1]
    for (let i = 2; i < n; i++) arr[i] = arr[i - 1] + arr[i - 2]
    return arr.reverse().join``
}

console.log(reverseFibo(3))
console.log(reverseFibo(10))