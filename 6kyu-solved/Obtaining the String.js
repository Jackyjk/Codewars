function obtain (s, t) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let index = t.indexOf(s[i]);
        console.log(index);
        if (index === -1) return -1;
        t = t.slice(0, index) + t.slice(index + 1);
        console.log(t);
        count += index;
    }
    return count;
}

console.log(obtain('abcdef', 'abdfec'));
// console.log(obtain('abcd', 'accd'));
// console.log(obtain('ab', 'ab'));
// console.log(obtain('ab', 'ba'));
// console.log(obtain('aaa', 'aaa'));