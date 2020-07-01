const solve = arr => arr.filter(a => arr.indexOf(-a) === -1)[0]

console.log(solve([ -9,-105,-9,-9,-9,-9,105]))