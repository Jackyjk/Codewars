// function solve (st) {
//     //..
//     let strArr = Array.from(new Set(st.split("")))
//     // console.log(strArr);
//     let finalArr = []
//     for (let i = 0; i < strArr.length; i++) {
//         finalArr.push(st.lastIndexOf(strArr[i]) - st.indexOf(strArr[i]))
//     }
//     let indexOfMax = finalArr.indexOf(Math.max(...finalArr));
//     return strArr[indexOfMax]
// }

console.log(solve('axyzxyz'));
console.log(solve('bcd'));
console.log(solve('aab'));
console.log(solve('aabccc'));

function solve (st) {
    return [...new Set([...st])].map(c => {
        return [c, st.lastIndexOf(c) - st.indexOf(c)];
    }).sort((a, b) => {
        const c = b[1] - a[1];
        if (c === 0) return a[0].localeCompare(b[0]);
        return c;
    })[0][0];
}

// function solve (st) {
//     let obj = {}
//     st.split``.map(v => obj[v] = Math.abs(st.indexOf(v) - st.lastIndexOf(v)))
//     return Object.entries(obj).sort((a, b) => b[1] - a[1] || a[0] > b[0])[0][0]
// }