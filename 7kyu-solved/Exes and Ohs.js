function XO (str) {
    //code here
    let strArr = str.split("")
    let xNum = 0, oNum = 0
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == 'x' || strArr[i] == 'X') xNum++
        else if (strArr[i] == 'o' || strArr[i] == 'O') oNum++
    }
    return xNum === oNum ? true : false
}

console.log(XO('xo'));