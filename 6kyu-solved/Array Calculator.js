const evaluate = arr => arr.length % 2 === 0 ? undefined : arr.join``.split('+').reduce((t, n) => t + (isNaN(n) ? n.split('*').reduce((a, b) => a * b) : +n), 0)


console.log(evaluate(['10', '+', '20', '*', '3']))
console.log(evaluate(['10', '+', '20', '*', '3', '*']))