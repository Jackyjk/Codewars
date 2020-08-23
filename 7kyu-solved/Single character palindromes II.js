function solve (str) {
    let count = 0;
    if (str.length % 2 == 0) {
        for (let i = 0; i < str.length / 2; ++i)
            if (str[i] != str[str.length - 1 - i])
                count++;
        if (count != 1)
            return false;
    }
    else {
        for (let i = 0; i < (str.length - 1) / 2; ++i)
            if (str[i] != str[str.length - 1 - i])
                count++;
        if (count > 1)
            return false;
    }
    return true;
}

console.log(solve('abcba'));
console.log(solve('abba'));
console.log(solve('abbx'));
console.log(solve('ab'));
console.log(solve('aa'));
console.log(solve('abbaa'));
