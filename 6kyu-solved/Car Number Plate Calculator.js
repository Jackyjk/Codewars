function findTheNumberPlate (id) {
    let a = id / 999 | 0;

    return String.fromCharCode(97 + a % 26, 97 + a % 676 / 26 | 0, 97 + a / 676 | 0)
        + `${id % 999 + 1}`.padStart(3, '0');
}

console.log(findTheNumberPlate(1487));
console.log(findTheNumberPlate(40000));