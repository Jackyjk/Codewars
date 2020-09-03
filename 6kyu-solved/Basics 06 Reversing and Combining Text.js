function reverse_and_combine_text (str) {
    let newStr = str.split` `
    while (newStr.length !== 1) {
        //全部的字符串段进行取反操作
        for (let i = 0; i < newStr.length; i++) {
            newStr[i] = newStr[i].split``.reverse().join``
        }
        let newStr2 = []
        //创造为 偶数 长度的字符串数组
        if (newStr.length % 2) newStr.push('')
        // 两两进行拼接
        for (let i = 0; i < newStr.length; i += 2) {
            newStr2.push(newStr[i] + newStr[i + 1])
        }
        // 拼接之后的数组，通过奇偶数进行数组的拼接和 插入空值
        newStr = newStr2
    }
    return newStr[0]
}

console.log(reverse_and_combine_text("abc def"));
console.log(reverse_and_combine_text("dfghrtcbafed"));
console.log(reverse_and_combine_text("abc def ghi jkl"));
console.log(reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt"));
console.log(reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44"));