function solve (n) {
    if (n % 10 != 0)
        return -1;
    var count = 0;
    while (n >= 500) { n -= 500; count++; }
    while (n >= 200) { n -= 200; count++; }
    while (n >= 100) { n -= 100; count++; }
    while (n >= 50) { n -= 50; count++; }
    while (n >= 20) { n -= 20; count++; }
    while (n >= 10) { n -= 10; count++; }
    return count;
}
console.log(solve(500));
console.log(solve(510));