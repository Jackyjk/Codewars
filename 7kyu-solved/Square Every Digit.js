const sqrt = n => n * n
function squareDigits (num) {
    //may the code be with you
    let strArr = ('' + num).split("")
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = sqrt(Number(strArr[i]))
    }
    return Number(strArr.join(""))
}

console.log(squareDigits(9119));