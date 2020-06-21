function pigIt (str) {
    let strArr = str
        .split(' ')
        .map(
            word =>
                `${word
                    .split('')
                    .splice(1)
                    .join('')}${word.charAt(0)}ay`
        )
    if (strArr[strArr.length - 1] == '!ay') strArr[strArr.length - 1] = '!'
    if (strArr[strArr.length - 1] == '?ay') strArr[strArr.length - 1] = '?'
    return strArr.join(" ")
}

// function pigIt (str) {
//     return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

console.log(pigIt('Hello world !'));