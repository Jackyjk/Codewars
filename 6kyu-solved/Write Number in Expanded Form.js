//! Time Out
// function expandedForm (num) {
//     // Your code here
//     if (num.toString().length === 1) return num + ''
//     if (num.toString().length === 2) return `${parseInt(num / 10) * 10} + ${num % 10}`
//     let number = []
//     let flag = true
//     while (flag) {
//         if (num.toString().length !== 0) {
//             if (num.toString().length <= 2) {
//                 number.push(num)
//                 flag = false
//             } else {
//                 if (num.toString().length % 2 === 0) {
//                     number.push(parseInt(num / Math.pow(10, num.toString().length)))
//                     num -= number[number.length - 1] * Math.pow(10, num.toString().length - 1)
//                 } else {
//                     number.push(parseInt(num / Math.pow(10, num.toString().length - 1)))
//                     num -= number[number.length - 1] * Math.pow(10, num.toString().length - 1)
//                 }
//             }
//         } else {
//             flag = false
//         }
//     }
//     number.reverse()
//     let Arr = []
//     for (let i = 0; i < number.length; i++) {
//         Arr.push(`${number[i] * Math.pow(10, i + 2)}`)
//     }

//     Arr[1] = Arr[1] / 10
//     let str = ''
//     for (let i = Arr.length - 1; i > 0; i--) {
//         str += `${Arr[i]} + `
//     }
//     return str + (Arr[0] / 100)
// }


function expandedForm (num) {
    // Your code here
    if (num.toString().length === 1) return num + ''
    if (num.toString().length === 2) return `${parseInt(num / 10) * 10} + ${num % 10}`
    let number = num.toString().split("")
    number.reverse()
    let Arr = []
    for (let i = 0; i < number.length; i++) {
        Arr.push(`${number[i] * Math.pow(10, i)}`)
    }
    let str = ''
    for (let i = Arr.length - 2; i >= 0; i--) {
        if (Arr[i] !== '0' && i !== 0) str += ` + ${Arr[i]}`
        if (i === 0 && Arr[i] !== '0') str += ` + ${Arr[i]}`
    }
    return Arr[Arr.length - 1] + '' + str
}


console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(4320))
console.log(expandedForm(70304))

function expandedForm (num) {
    if (num < 10) return `${num}`;
    let over = num % (Math.pow(10, (num.toString().length - 1)));
    if (!over) return `${num}`;
    return `${num - over} + ${expandedForm(over)}`;
}

const expandedForm = n =>
    n
        .toString()
        .split("")
        .reverse()
        .map((a, i) => a * Math.pow(10, i))
        .filter(a => a > 0)
        .reverse()
        .join(" + ");