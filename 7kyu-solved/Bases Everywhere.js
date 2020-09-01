const baseFinder = seq => new Set(seq.join``).size

console.log(baseFinder(['1', '2', '3', '4', '5', '6', '10', '11', '12', '13']))
