// const sort = (a, b) => a - b
function sumIntervals (intervals) {
    let arr = []
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j < intervals[i][1]; j++) {
            arr.push(j)
        }
    }
    return new Set(arr).size
}

// console.log(sumIntervals([[1, 4], [7, 10], [3, 5]]))
console.log(sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]))