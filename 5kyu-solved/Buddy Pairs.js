function s (n) {
    let i, root = Math.sqrt(n), sum = Number.isInteger(root) ? root : 0;
    for (i = 2; i < root; i++)
        if (n % i == 0)
            sum += i + n / i;
    return sum;
}

function buddy (start, limit) {
    for (let i = start; i <= limit; i++) {
        let si = s(i)
        if (i < si && i === s(si)) return [i, si]
    }
    return "Nothing"
}

console.log(buddy(48, 50));
console.log(buddy(10, 50));
console.log(buddy(100, 500));