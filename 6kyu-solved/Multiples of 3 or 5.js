function solution (number) {
    let arr = [];
    for (let i = number - 1; i >= 0; i--) {
        if (i % 3 === 0) arr.push(i);
        if (i % 5 === 0) arr.push(i);
    }
    return [...new Set(arr)].reduce((a, b) => a + b, 0);
}
console.log(solution(10));
// console.log(five());