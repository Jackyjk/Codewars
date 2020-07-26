function primeFactors (n) {
    for (var s = "", d = 2; n > 1; d++) {
        for (var k = 0; n % d == 0; k++, n /= d);
        s += k ? (k == 1 ? `(${d})` : `(${d}**${k})`) : "";
    }
    return s;
}

console.log(primeFactors(7775460)); //(2**2)(3**3)(5)(7)(11**2)(17)