function uniqueInOrder (s) {
    let strArr
    if (typeof s == "string") {
        strArr = s.split("")
    } else {
        strArr = s
    }
    let finalArr = []
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] !== strArr[i + 1] ? finalArr.push(strArr[i]) : str = strArr[i]
    }
    return finalArr
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));