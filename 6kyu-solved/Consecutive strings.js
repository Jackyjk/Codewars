function longestConsec (strarr, k) {
    let str = ''
    if (strarr.length == 0 || k > strarr.length || k <= 0) {
        return ''
    }

    for (let i = 0; i < strarr.length; i++) {
        let currentStr = strarr.slice(i, k + i).join('');
        if (currentStr.length > str.length) {
            str = currentStr
        }
    }
    return str
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2))