function findMiddle (str) {
    if ((/\d/.test(str) === false) || (typeof str !== 'string')) return -1;
    const arrNum = str.match(/[0-9]/g);
    let total = 1;
    for (let i = 0; i < arrNum.length; i++) total *= arrNum[i]
    const strNum = total.toString().split('');
    return (strNum.length % 2 !== 0) ? Number(strNum[Math.floor(strNum.length / 2)]) : Number(strNum[(strNum.length / 2) - 1] + strNum[strNum.length / 2])
}

console.log(findMiddle('s7d8jd9'));