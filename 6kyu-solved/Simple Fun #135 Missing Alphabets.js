function missingAlphabets (s) {
    //coding and coding..
    let obj = {}, loseArr = []
    // 去重 查找  有无缺失的字母  保存在数组 loseArr
    let sArr = Array.from(new Set(s)).sort().join``
    for (let i = 0, num = 97; i <= 25; i += 1, num += 1) {
        if (!sArr.includes(String.fromCharCode(num))) {
            // console.log(i);
            loseArr.push(String.fromCharCode(num))
        }
    }

    //  获取所有字母的个数  obj 键值对存储
    s = s.split``
    s.forEach(v => {
        obj[v] = obj[v] ? obj[v] + 1 : 1;
    });

    // 获取 出现次数最多的 字母个数
    let numArr = []
    for (let i = 0; i < Object.values(obj).length; i++) {
        numArr.push(Object.values(obj)[i])
    }
    let max = numArr.sort((a, b) => a - b)[numArr.length - 1]

    let finalArr = []
    for (let i = 0; i < Object.values(obj).length; i++) {
        if (Object.values(obj)[i] < max) {
            finalArr.push(Object.keys(obj)[i].repeat(max - Object.values(obj)[i]))
        }
    }
    for (let i = 0; i < loseArr.length; i++) {
        finalArr.push(loseArr[i].repeat(max))
    }

    return finalArr.sort().join``
}

console.log(missingAlphabets("abcdefghijklmnopqrstuvwxy"));
console.log(missingAlphabets("abcdefghijklmnopqrstuvwxyz"));
console.log(missingAlphabets("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy"));
console.log(missingAlphabets("abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy"));
console.log(missingAlphabets("codewars"));


// // other
// function missingAlphabets (s) {
//     let m = 0;

//     const a = 'abcdefghijklmnopqrstuvwxyz';
//     const c = s.split('').reduce((x, y) => {
//         x[y] = (x[y] || 0) + 1;
//         m = Math.max(m, x[y]);
//         return x;
//     }, {});

//     return a.replace(/./g, d => d.repeat(m - (d in c ? c[d] : 0)));
// }