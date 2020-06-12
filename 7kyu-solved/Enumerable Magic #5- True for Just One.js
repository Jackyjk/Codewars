function one (array, fun) {
    return array.filter(fun).length == 1;
}

console.log(one([3, 2, 7, 1, 7, 5, 9, 0 ], function (item) { return item == 0 }));
console.log(one([1, 2, 3, 4, 5], function (item) { return item < 2 }));
console.log(one([1, 2, 3, 4, 5], function (item) { return item % 2 }));
console.log(one([1, 2, 3, 4, 5], function (item) { return item > 5 }));
