var sum_pairs = function (ints, s) {
    var arrObj = {}
    for (var i = 0; i < ints.length; ++i) {
        if (arrObj[s - ints[i]]) return [s - ints[i], ints[i]];
        arrObj[ints[i]] = true
    }
}

console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8))
console.log(sum_pairs([1, -2, 3, 0, -6, 1], -6))