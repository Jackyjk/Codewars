function high (x) {
    let strArr = x.split(" ")
    let num = 0
    let finalNum = []
    // 获取各个单词的数值
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < strArr[i].length; j++) {
            num += (strArr[i].charCodeAt(j) - 96)
        }
        finalNum[i] = num
        num = 0
    }
    //获取 最大数值字母的索引值
    let index = 0
    for (let i = 1; i < finalNum.length; i++) {
        if (finalNum[i] > finalNum[index]) index = i
    }
    return strArr[index]
}

console.log(high('take me to semynak'))
console.log(high('what time are we climbing up the volcano'))
console.log(high('man i need a taxi up to ubud'))