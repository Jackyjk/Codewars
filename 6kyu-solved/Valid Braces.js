// function validBraces (braces) {
//     //TODO
//     let strArr = braces.split("")
//     let flag = false
//     for (let i = 0; i < strArr.length; i++) {
//         if ((strArr[i] == '(' && strArr[i + 1] == ')') || (strArr[i] == '{' && strArr[i + 1] == '}') || (strArr[i] == '[' && strArr[i + 1] == ']')) {
//             flag = true
//         } else if ()
//     }
// }

function validBraces (braces) {
    for (var i = 0, depth = []; i < braces.length; i++) {
        switch (braces[i]) {
            case '(': case '[': case '{': depth.push(braces[i]); break;
            case ')': if (depth.pop() != '(') return false; break;
            case ']': if (depth.pop() != '[') return false; break;
            case '}': if (depth.pop() != '{') return false; break;
        }
    }
    return depth.length == 0;
}


// function validBraces (braces) {
//     while (/\(\)|\[\]|\{\}/g.test(braces)) {
//         braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
//     }
//     return !braces.length;
// }

console.log(validBraces("[(])"));