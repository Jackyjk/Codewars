// 对 长度进行排序
const sortStringsByVowels = (strings) => strings.sort((s1, s2) => myFun(s2) - myFun(s1))

// 获取每个字符串中的 元音字母长度
function myFun (str) {
    const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let maxLength = 0

    let inArrLength = 0
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            inArrLength += 1
        } else {
            if (inArrLength > maxLength) maxLength = inArrLength
            inArrLength = 0
        }
        if (inArrLength > maxLength) maxLength = inArrLength
    }
    return maxLength
}

console.log(sortStringsByVowels(["aa", "eee", "oo", "iiii"]));
console.log(sortStringsByVowels(["uijijeoj", "lkjlkjww2", "iiutrqy"]));
console.log(sortStringsByVowels(["AIBRH", "", "YOUNG", "GREEEN"]));