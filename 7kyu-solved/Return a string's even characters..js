function evenChars (string) {
    //keep coding!
    if (string.length <= 1 || string.length > 100) return 'invalid string'
    let arr = []
    let sArr = string.split``
    for (let i = 0; i < sArr.length; i++) {
        if (i % 2 !== 0) {
            arr.push(sArr[i])
        }
    }
    return arr
}

console.log(evenChars("abcdefghijklm"))