const solution = pairs => Object.keys(pairs).map(function (value) { return value + " = " + pairs[value]; }).join(',');


solution({ a: 1, b: '2' }) // should return "a = 1,b = 2"
