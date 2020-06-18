//* 偶数之间加上 * 号
function asteriscIt (n) {
    if (Array.isArray(n))
        return n
            .join("")
            .split("")
            .map((v, i, arr) => (v % 2 === 0 && arr[i + 1] % 2 === 0 ? v + "*" : v))
            .join(``);
    return ("" + n)
        .split("")
        .map((v, i, arr) => (v % 2 === 0 && arr[i + 1] % 2 === 0 ? v + "*" : v))
        .join(``);
}

console.log(asteriscIt(5312708));
console.log(asteriscIt(2222));
console.log(asteriscIt([1, 4, 64, 68, 67, 23, 1]));