function hamming (a, b) {
    let n = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            n++;
        }
    }
    return n;
}

console.log(hamming("I like turtles", "I like turkeys"))
console.log(hamming("Hello World", "Hello World"))