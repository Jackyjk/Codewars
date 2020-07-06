function solution (hour) {
    let str = hour.toString();
    if (str.length > 4 || str.length < 3) throw Error();
    return (str.length === 4) ? `${str[0]}${str[1]}:${str[2]}${str[3]}` : `${str[0]}:${str[1]}${str[2]}`;
}


// console.log(solution(10000));
console.log(solution(1654));
console.log(solution(365));