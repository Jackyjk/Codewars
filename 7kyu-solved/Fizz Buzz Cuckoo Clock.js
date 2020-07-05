function fizzBuzzCuckooClock (time) {
    let a = time.split(":").map(v => parseInt(v));
    let m = a[1],
        h = a[0];
    h = h === 0 ? 12 : h > 12 ? h - 12 : h;
    if (m === 0) return "Cuckoo ".repeat(h).trim();
    if (m === 30) return "Cuckoo";
    if (m % 3 === 0) {
        if (m % 5 === 0) return "Fizz Buzz";
        return "Fizz";
    }
    if (m % 5 === 0) return "Buzz";
    return "tick";
}