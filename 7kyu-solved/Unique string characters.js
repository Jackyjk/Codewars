function solve (a, b) {
    let str1 = a
        .split("")
        .filter(v => !b.split("").includes(v))
        .join("");
    let str2 = b
        .split("")
        .filter(v => !a.split("").includes(v))
        .join("");
    return str1 + str2;
}

function solve (a, b) {
    return (a + b).split("").filter(c => !a.includes(c) || !b.includes(c)).join("");
}

console.log(solve("xyab", "xzca"))