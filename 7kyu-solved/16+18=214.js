//! mine
function add (num1, num2) {
    num1 = (num1 + '').split``
    num2 = (num2 + '').split``
    let arr = []
    let num = (num1.length > num2.length ? num1.length : num2.length)
    if (num1.length < num) num1.unshift('0'.repeat(num - num1.length))
    if (num2.length < num) num2.unshift('0'.repeat(num - num2.length))

    for (let i = 0; i < num; i += 1) {
        arr[i] = Number(num1[i]) + Number(num2[i])
    }

    return Number(arr.join``)
}


// function add (num1, num2) {
//     let res = [];
//     num1 = num1.toString().split("").reverse();
//     num2 = num2.toString().split("").reverse();
//     let larger = Math.max(num1.length, num2.length);
//     for (let i = 0; i < larger; i++) {
//         let first = parseInt(num1[i]) || 0;
//         let second = parseInt(num2[i]) || 0;
//         res.unshift(first + second);
//     }
//     return parseInt(res.join(""));
// }


// function add (num1, num2) {
//     num1 = num1.toString().split("").reverse().join("");
//     num2 = num2.toString().split("").reverse().join("");

//     if (num1.length < num2.length) {
//         [num1, num2] = [num2, num1];
//     }

//     let returnString = "";
//     for (let i = 0; i < num1.length; i++) {
//         let int1 = parseInt(num1[i]);
//         let int2 = parseInt(num2[i] || 0);

//         returnString = (int1 + int2).toString() + returnString;
//     }

//     return parseInt(returnString);
// }

console.log(add(122, 81));
console.log(add(276492, 477479));