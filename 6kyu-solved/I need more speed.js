function reverse (arr) {
    //code me
    for (var i = 0; i < arr.length / 2; i++) {

        var temp = arr[i]; //替换相邻的两个变量
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

console.log(reverse([1, 2, 3, 4, 5]));
console.log(reverse(['hello', 'world', 'how', 'are', 'you', '?']));
console.log(reverse([{ a: 1 }, { b: 2 }]));

