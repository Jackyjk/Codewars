reverse = a => a.map(a.pop, [...a])

console.log(reverse([1, 2, 3]));
console.log(reverse([...'01234567890123456789']));
console.log(reverse([0, undefined]));
// Codesize 59
// reverse = a => a.reduceRight((t, v) => (t.push(v), t), []);