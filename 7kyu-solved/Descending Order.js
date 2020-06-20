const sort = (a, b) => b - a
const descendingOrder = (n) => Number(('' + n).split("").sort(sort).join(""))

console.log(descendingOrder(123456789));