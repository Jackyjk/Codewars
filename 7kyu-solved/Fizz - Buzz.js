function solution (n) {
    n--;
    const mul3 = Math.floor(n / 3);
    const mul5 = Math.floor(n / 5);
    return [mul3 - Math.floor(mul3 / 5), mul5 - Math.floor(mul5 / 3), Math.floor(n / 15)];
}

console.log(solution(20));