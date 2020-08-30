function allNonConsecutive (arr) {
    let finalArr = [];
    arr.forEach((val, index) => {
        if (val !== arr[index - 1] + 1 && index) {
            finalArr.push({ i: index, n: val });
        }
    });
    return finalArr;
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));