function trimSpace (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == " " || array[i] == null || typeof (array[i]) == "undefined") {
            array.splice(i, 1);
            i = i - 1;

        }
    }
    return array;
}

function twosDifference (arr) {
    //Enter your solution here
    let finalArr = [];
    let newArr = arr.sort(function(a, b){return a - b});
    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[j] - newArr[i] === 2) {
                finalArr[i] = [newArr[i], newArr[j]]
            }
        }

    }
    return trimSpace(finalArr);
}

console.log(twosDifference([1, 2, 3, 4]));
console.log(twosDifference([1, 3, 4, 6]));
console.log(twosDifference([1, 23, 3, 4, 7]));
console.log(twosDifference([4, 3, 1, 5, 6]));

