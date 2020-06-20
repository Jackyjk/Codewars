const capitalize = ([first, ...rest], lowerRest = false) =>
    first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

function accum (s) {
    // your code
    let strArr = [].concat(...s)
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].repeat(i + 1)
        strArr[i] = strArr[i].toLowerCase()
        strArr[i] = capitalize(strArr[i])
    }
    return strArr.join("-")
}

// console.log(accum("abcd"));
console.log(accum("ZpglnRxqenU"));