// [1, 3, 4]  =>  2
// [1, 2, 3]  =>  4
// [4, 2, 3]  =>  1

// return the missing number!
function findNumber (array) {
    let newArr = []
    //获取数组中的最大值
    array.sort(function (a, b) { return a - b });
    // 获得完整的数组
    for (let i = 1; i <= array[array.length - 1]; i++) {
        newArr[i - 1] = i;
    }
    finalNum = 0;
    // 循环比较
    for (let i = 0; i < newArr.length - 1; i++) {
        if (array[i] !== newArr[i]){
            finalNum = newArr[i]
            break;
        }
    }
    return finalNum
}

console.log(findNumber([-1, 3, 4, 5, 6, 7, 8]));
console.log(findNumber([1, 3, 4, 5, 6, 7, 8]));
console.log(findNumber([7, 8, 1, 2, 4, 5, 6]));
console.log(findNumber([1, 2, 3, 5]));
console.log(findNumber([1, 3]));
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]));
