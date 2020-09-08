/**
 * Your solution
 * @date JS Date object
 **/
function solution (date) {
    let sum = date.getDate() + date.getMonth() + 1 + date.getFullYear();
    while (sum > 9) sum = Math.floor(sum / 10) + (sum % 10);
    return sum;
}

console.log(solution(new Date('10/13/1964')));
console.log(solution(new Date('01/02/2008')));