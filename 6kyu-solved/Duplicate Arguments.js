// solution(1, 2, 3)             -->  false
// solution(1, 2, 3, 2)          -->  true
// solution('1', '2', '3', '2')  -->  true

function solution () {
    // return true if this method is called with duplicate argument values
    let arr = Array.from(arguments)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true
        }
    }
    return false
}

function solution () { return new Set(arguments).size != arguments.length; }

console.log(solution('1', '2', '3', '2'));
console.log(solution('a', 'b', 'c', 'a'));
console.log(solution(1, 2, 3));