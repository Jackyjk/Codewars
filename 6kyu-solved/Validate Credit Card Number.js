const validate = n => [...String(n)].reverse()
    .map((val, index) => (index % 2 ? val * 2 : Number(val)))
    .map((val, index) => (val > 9 ? val - 9 : val))
    .reduce((prev, curr) => prev + curr) % 10
    ? false
    : true

console.log(validate(123));