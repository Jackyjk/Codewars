function Up (str) {
    let strtArr = str.split("")
    for (let i = 0; i < strtArr.length; i++) {
        strtArr[i] = strtArr[i].toUpperCase()
    }
    return strtArr.join("")
}
function Low (str) {
    let strtArr = str.split("")
    for (let i = 0; i < strtArr.length; i++) {
        strtArr[i] = strtArr[i].toLowerCase()
    }
    return strtArr.join("")
}


function arrange (str) {
    let strArr = str.split(" ")
    for (let i = 0; i < strArr.length - 1; i++) {
        if (i % 2 == 0) {
            if ((strArr[i].length) > strArr[i + 1].length) {
                let temp = strArr[i]
                strArr[i] = strArr[i + 1]
                strArr[i + 1] = temp
            }
        } else {
            if (strArr[i + 1].length > strArr[i].length) {
                let temp = strArr[i]
                strArr[i] = strArr[i + 1]
                strArr[i + 1] = temp
            }
        }
    }
    // return strArr    //  [ 'be', 'arrived', 'two', 'after', 'My', 'so' ]
    let finalArr = []
    for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) {
            finalArr.push(Low(strArr[i]))
        } else {
            finalArr.push(Up(strArr[i]))
        }
    }
    return finalArr.join(" ")
}

console.log(arrange("after be arrived two My so"))