function tribonacci (signature, n) {
    //your code here
    if (n < 3) return signature.splice(0, n)
    for (let i = 3; i < n; i++) {
        signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
    }
    return signature
}



console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([1, 1, 1], 1));
console.log(tribonacci([300, 200, 100], 0));