function digital_root (n) {
    // ...
    let nStr = n + ''
    let numArr = nStr.split("");
    let sum = 0;
    numArr.forEach(ele => {
        sum += Number(ele);
    });
    // console.log(sum);
    // if (sum <= 9) {
    //     return sum;
    // } else {
    //     return digital_root(sum);
    // }

    if (sum >= 10) {
        return digital_root(sum);
    }
    return sum;
}

console.log(digital_root(43));
console.log(digital_root(10));
console.log(digital_root(100));
console.log(digital_root(1000));
console.log(digital_root(132189));
console.log(digital_root(493193));

// function digital_root (n) {
//     return (n - 1) % 9 + 1;
// }

console.log(digital_root(16));
console.log(digital_root(456));
console.log(digital_root(942));