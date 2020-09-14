function fibonacci (n) {
    if (n < 3) return n == 2 ? [0, 1] : n == 1 ? [0] : []
    let arr = [0, 1]
    for (let i = 2; i < n; i++) arr[i] = arr[i - 1] + arr[i - 2]
    return arr
}

console.log(fibonacci(4))           // [0,1,1,2]
console.log(fibonacci(13)[12])      // 144