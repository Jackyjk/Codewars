//* 先求和
// const fromNb2Str = (n, sys) => (sys.reduce((a, b) => a * b, 1) < n || sys.length % 2 !== 0) ? "Not applicable" : sys.map(v => "-" + (n % v) + "-").join``;


// function fromNb2Str (n, sys) {
//     return sys.reduce((a, b) => a * b, 1) < n || sys.length % 2 !== 0 ? "Not applicable" : sys.map(v => "-" + (n % v) + "-").join``;
// }

console.log(fromNb2Str(187, [8, 7, 5, 3]));
// console.log(fromNb2Str(11, [2, 3, 5]));