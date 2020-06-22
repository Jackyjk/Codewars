const capitalize = s => [
    s
        .split("")
        .map((v, i) => (i % 2 == 0 ? v.toUpperCase() : v.toLowerCase()))
        .join(""),
    s
        .split("")
        .map((v, i) => (i % 2 !== 0 ? v.toUpperCase() : v.toLowerCase()))
        .join("")
];

console.log(capitalize("abcdef"));