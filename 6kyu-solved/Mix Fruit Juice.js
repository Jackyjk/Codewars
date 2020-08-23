const regular = ['banana', 'orange', 'apple', 'lemon', 'grapes']            //5
const special = ['avocado', 'strawberry', 'mango']              //7

function mixFruit (arr) {
    let regularNum = 0, specialNum = 0, otherNum = 0
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase()
        if (regular.includes(arr[i])) {
            regularNum++
        } else if (special.includes(arr[i])) {
            specialNum++
        } else {
            otherNum++
        }
    }
    return Number(((regularNum * 5 + specialNum * 7 + otherNum * 9) / arr.length).toFixed(0))
}


console.log(mixFruit(['banana', 'mango', 'avocado']))   //5+7+7  -> 19  -> 6
console.log(mixFruit(['watermelon', 'mango', 'avocado'])) // 9+7+7  -> 23/3  -> 8


// function mixFruit (arr) {
//     let reg = ["banana", "orange", "apple", "lemon", "grapes"];
//     let spec = ["avocado", "strawberry", "mango"];
//     return Math.round(
//         arr.reduce((a, b) => {
//             b = b.toLowerCase();
//             if (reg.includes(b)) return a + 5;
//             if (spec.includes(b)) return a + 7;
//             return a + 9;
//         }, 0) / arr.length
//     );
// }