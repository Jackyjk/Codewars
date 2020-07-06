function solve (s) {
    //..
    let arr = s.split``.sort()
    for (let i = 0; i < arr.length; i++)arr[i] = arr[i].charCodeAt()
    for (let i = 0; i < arr.length - 1; i++) {
        if ((arr[i + 1] - arr[i]) !== 1) return false
    }
    return true
}

console.log(solve("abd"));
console.log(solve("dabc"));
console.log(solve("abc"));
console.log(solve("abbc"));
console.log(solve("v"));