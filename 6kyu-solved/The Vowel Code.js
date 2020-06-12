function encode (string) {
    let strArr = string.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == "a") {
            strArr[i] = '1'
        } else if (strArr[i] == "e") {
            strArr[i] = '2'
        } else if (strArr[i] == "i") {
            strArr[i] = '3'
        } else if (strArr[i] == "o") {
            strArr[i] = '4'
        } else if (strArr[i] == "u") {
            strArr[i] = '5'
        } else {
            strArr[i] = strArr[i]
        }
    }
    return strArr.join("");
}

function decode (string) {
    let strArr = string.split('')
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == "1") {
            strArr[i] = 'a'
        } else if (strArr[i] == "2") {
            strArr[i] = 'e'
        } else if (strArr[i] == "3") {
            strArr[i] = 'i'
        } else if (strArr[i] == "4") {
            strArr[i] = 'o'
        } else if (strArr[i] == "5") {
            strArr[i] = 'u'
        } else {
            strArr[i] = strArr[i]
        }
    }
    return strArr.join("");
}

console.log(encode('hello'));
console.log(decode('h2ll4'));