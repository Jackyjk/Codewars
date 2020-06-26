function solve (s, g) {
    //..
    let arr = []
    for (let i = g; i <= s; i += g) {
        arr.push(i)
    }
    let sum = arr[0]
    let num1 = 0
    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] === s) {
            num1 = arr[i]
            break
        }
    }
    return num1 ? [sum, num1] : -1
}

console.log(solve(12, 4));
console.log(solve(6, 3));
console.log(solve(8, 2));
console.log(solve(10, 3));