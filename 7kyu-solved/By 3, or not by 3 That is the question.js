var divisibleByThree = str => str.split("").reduce((a, b) => a + b * 1, 0) % 3 === 0;
console.log(divisibleByThree('123'));