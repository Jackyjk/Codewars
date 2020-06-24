function fix (paragraph) {
    if (paragraph.length === 0) return ""
    let strArr = paragraph.split(". ")
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].substring(1, strArr[i].length)
    }
    return strArr.join(". ")
}

console.log(fix("hi."));
console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."));