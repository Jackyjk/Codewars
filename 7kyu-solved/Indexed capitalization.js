function capitalize (s, arr) {
    let strArr = s.split("")
    let str = ''
    for (let i = 0; i < strArr.length; i++) {
        arr.includes(i) ? str += strArr[i].toUpperCase() : str += strArr[i]
    }
    return str
}
console.log(capitalize("abcdef", [1, 2, 5]))