// function orderedCount (str) {
//     let arrStr = str.split("")
//     let newArr = new Set(arrStr)
//     arrStr.sort()
//     let num1 = 0
//     let num = []
//     for (let i = 0; i < arrStr.length; i++) {
//         if (arrStr[i] == arrStr[i + 1]) {
//             num1++
//         } else {
//             num += num1 + 1
//             num1 = 0
//         }
//     }
//     newArr = [].concat(...newArr).sort()
//     let finalArr = []
//     for (let i = 0; i < newArr.length; i++) {
//         finalArr.push([newArr[i], Number(num[i])])
//     }
//     return finalArr
// }

// var orderedCount = function (text) {
//     let obj = {};
//     text.split("").map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1));
//     let arr = [];
//     let val = Object.values(obj);
//     let key = Object.keys(obj);
//     for (let i = 0; i < key.length; i++) {
//         arr.push([key[i], val[i]]);
//     }
//     return arr;
// };


// const orderedCount = s => [...s].reduce((a, c) => (a[c] = a[c] + 1 || 1) && a, {})


// function orderedCount (s) {
//     const chars = {}

//     for (let char of s) {
//         chars[char] = chars[char] + 1 || 1
//     }
//     return chars
// }

const orderedCount = s => [...new Set(s)].map(letter => [letter, s.split(letter).length - 1])

console.log(orderedCount("abracadabra"));
console.log(orderedCount("233312"));