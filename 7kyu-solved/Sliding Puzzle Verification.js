function isSolved (board) {
    let myArr = board.toString().split(",")
    let flag = true
    for (let i = 0; i < myArr.length; i++) {
        if (Number(myArr[i]) === i) flag = true
        else {
            flag = !flag
            break
        }
    }
    return flag
}

console.log(isSolved([[0, 1], [2, 3]]))
console.log(isSolved([[0, 2], [1, 3]]))