function findMiddle (str) {
    let num = str.replace(/[^0-9]/ig, "")
    let numArr = ('' + num).split("")
    if (numArr.length === 0) return -1
    let sum = 1
    for (let i = 0; i < numArr.length; i++) {
        sum *= Number(numArr[i])
    }
    finalNum = ('' + sum).split("")
    return finalNum.length % 2 == 0 ? Number(finalNum[parseInt(finalNum.length / 2) - 1] * 10) + Number(finalNum[parseInt(finalNum.length / 2)]) : Number(finalNum[parseInt(finalNum.length / 2)])
}

console.log(findMiddle('s7d8jd9'));
console.log(findMiddle('58jd9fgh/fgh6s.,sdf'));