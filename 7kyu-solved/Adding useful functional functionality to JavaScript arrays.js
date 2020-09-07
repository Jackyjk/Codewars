Array.range = function (start, count) {
    let arr = []
    while (count > 0) {
        arr.push(start++)
        count--
    }
    return arr
}

Array.prototype.sum = function () {
    return this.reduce(function (prev, next) {
        return prev + next;
    }, 0);
}