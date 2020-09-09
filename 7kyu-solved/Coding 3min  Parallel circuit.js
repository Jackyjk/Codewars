const resistance = arr => Math.round(100 * (1 / (arr.reduce((s, t) => s + (1 / t.reduce((a, b) => a + b, 0)), 0)))) / 100;


console.log(resistance([[13, 8], [17, 17, 3], [4, 7, 12, 12, 8]]));