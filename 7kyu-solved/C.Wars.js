function initials (n) {
    let strArr = n.split(" ")
    let str = ''
    for (let i = 0; i < strArr.length - 1; i++) {
        str += `${strArr[i][0].toUpperCase()}.`
    }
    strArr[strArr.length - 1] = strArr[strArr.length - 1][0].toUpperCase() + strArr[strArr.length - 1].substring(1, strArr[strArr.length - 1].length)
    return `${str}${strArr[strArr.length - 1]}`
}

console.log(initials('code wars'))
console.log(initials('Barack hussain obama'))