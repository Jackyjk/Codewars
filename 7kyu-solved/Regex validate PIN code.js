const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);

console.log(validatePIN('1'));
console.log(validatePIN('12'));
console.log(validatePIN('1333'));
console.log(validatePIN('12345'));