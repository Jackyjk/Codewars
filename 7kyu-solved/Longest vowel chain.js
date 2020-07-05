const sort = (a, b) => b - a
function solve (s) {
    let arr = ['a', 'e', 'i', 'o', 'u']
    let finalArr = []
    let strArr = s.split("")
    for (let i = 0; i < strArr.length; i++) {
        if (arr.includes(strArr[i])) {
            finalArr.push(strArr[i])
        } else {
            finalArr.push(' ')
        }
    }
    return finalArr.join("").split(" ").map(v => (v = v.length)).sort(sort)[0]
}
// function solve (s) {
//     return Math.max(
//         ...s
//             .replace(/[^aeiuo]/gi, " ")
//             .split(" ")
//             .map(v => (v = v.length))
//     );
// }

console.log(solve("codewarriors"));
console.log(solve("strengthlessnesses"));
console.log(solve("ultrarevolutionariees"));
console.log(solve("iiihoovaeaaaoougjyaw"));