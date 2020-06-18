//* const uniq = a => a.filter(function (x, i) { return i == 0 || !(a[i - 1] == x); })
function uniq (s) {
    let str = s[0]
    for (let i = 1; i < s.length; i++) {
        if (s[i] == str) {
            s.splice(i, 1)
            i = i - 1
        }
        else {
            str = s[i]
        }
    }
    return s
}

console.log(uniq(['a', 'a', 'b', 'b', 'c', 'a', 'b', 'c']));