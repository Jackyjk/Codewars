// function daysRepresented (trips) {
//     // your code here
//     let sum = 0;
//     for (let i = 0; i < trips.length; i++) {
//         for (let j = 0; j < 2; j++) {
//             sum += trips[i][1] - trips[i][0]
//         }
//     }
//     return sum/2 + trips.length
// }
//!注意 重复的话 需要进行削减天数

function daysRepresented (trips) {
    let arr = trips.map(v => {
        let arr = [];
        for (let i = v[0]; i <= v[1]; i++) {
            arr.push(i);
        }
        return arr;
    });
    return [...new Set([].concat(...arr))].length;
}

console.log(daysRepresented([[10, 15], [25, 35]]));
console.log(daysRepresented([[2, 8], [220, 229], [10, 16]]));
console.log(daysRepresented([[2, 8], [6, 16], [17, 26]]));