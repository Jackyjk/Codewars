const reverseLetter = str => str.replace(/[^a-zA-Z]/g, '').split``.reverse().join('')

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));