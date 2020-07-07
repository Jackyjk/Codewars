function calculate (expression) {
    const stack = [];
    const operations = {
        '+': () => (stack.push(stack.pop() + stack.pop())),
        '-': () => (stack.push(stack.pop() - stack.pop())),
        '*': () => (stack.push(stack.pop() * stack.pop())),
        '/': () => (stack.push(stack.pop() / stack.pop()))
    };

    for (let token of expression.split(' ').reverse())
        operations[token] ? operations[token]() : stack.push(+token);

    return stack[0];
}


console.log(calculate('+ 3 5'))
console.log(calculate('- 5 5'))
console.log(calculate('* + 2 2 3'))