//  通过 50%
numbers1 = () => !Array.from(arguments).map(a => (typeof a) == 'number').includes(false)

// 通过100%
function numbers () {
    return !Array.from(arguments).map(a => (typeof a) == 'number').includes(false)
}

// console.log(numbers(1, 4, 3, 2, 5));
// console.log(numbers(1, "a", 3));
// console.log(numbers(1, 3, NaN));
console.log(numbers('1', '2', '3', '4'));
console.log(numbers((1, "2", [3, 4], "a")));