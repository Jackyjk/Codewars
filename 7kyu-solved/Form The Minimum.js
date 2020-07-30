const minValue = values => Number(Array.from(new Set(values.sort((a, b) => a - b))).join(''))

console.log(minValue([4, 7, 5, 7]));