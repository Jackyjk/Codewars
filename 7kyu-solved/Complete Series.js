// inputs        outputs
// [2,1]     ->  [0,1,2]
// [1,4,4,6] ->  [0]

function completeSeries (arr) {
    // write your code here
    let sortArr = arr.sort(function (a, b) { return a - b });
    let num = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === num) {
            return [0]
        } else {
            num = arr[i]
        }
    }
    let finalArr = []
    for (let i = 0; i <= arr[arr.length - 1]; i++) {
        finalArr[i] = i;
    }
    return finalArr
}

console.log(completeSeries([2, 1]));
console.log(completeSeries([1, 4, 4, 6]));
console.log(completeSeries([1, 4, 6]));