const expression = (number, operation) =>
    operation ? operation(number) : number

const zero = operation => expression(0, operation)
const one = operation => expression(1, operation)
const two = operation => expression(2, operation)
const three = operation => expression(3, operation)
const four = operation => expression(4, operation)
const five = operation => expression(5, operation)
const six = operation => expression(6, operation)
const seven = operation => expression(7, operation)
const eight = operation => expression(8, operation)
const nine = operation => expression(9, operation)

const plus = x => y => y + x
const minus = x => y => y - x
const times = x => y => y * x
const dividedBy = x => y => parseInt(y / x)


console.log(seven(times(five())))
console.log(six(dividedBy(two())))
console.log(seven(dividedBy(four())))