const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);

const orderWeight = (str) =>
    str.split(' ').sort((a, b) => {
        const num1 = sum(a) - sum(b);
        return num1 == 0 ? (a > b ? 1 : -1) : num1;
    }).join(' ')


console.log(orderWeight("103 123 4444 99 2000"));       // 4 6 16 18 2