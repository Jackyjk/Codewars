//! Mine
function doMath (s) {
    //your code here
    let sArr = s.split(" ")
    let reg = /[a-z,A-Z]/g
    let arr = []
    for (let i = 0; i < sArr.length; i++) {
        arr.push([sArr[i].match(reg), i])
    }
    arr.sort() //[ [ 'b' ], 4 ],[ [ 'y' ], 2 ],[ [ 'z' ], 0 ],[ [ 'z' ], 1 ],[ [ 'z' ], 3 ]

    let finalArr = []
    for (let i = 0; i < arr.length; i++)  finalArr.push(sArr[arr[i][1]])

    // finalArr     //[ '900b', 'y369', '24z6', '1z23', '89z' ]
    for (let i = 0; i < finalArr.length; i++) {
        finalArr[i] = Number(finalArr[i].replace(/[^0-9]/ig, ""))
    }

    let n = finalArr[0]
    let math = ['+', '-', '*', '/']
    for (let i = 1; i < finalArr.length; i++) {
        n = eval(`${n}${math[(i - 1) % 4]}${finalArr[i]}`)
    }
    return Math.round(n)
}

// //! Correct solution
// function doMath (s) {
//     let r = s.split(' ')
//         .map((x, i) => ({ i: i, n: +x.replace(/[a-z]/gi, ''), c: x.replace(/\d/g, '').charCodeAt(0) }))
//         .sort((x, y) => x.c - y.c || x.i - y.i)
//         .map(x => x.n)
//     let n = r[0]
//     let math = ['+', '-', '*', '/']
//     for (let i = 1; i < r.length; i++) {
//         n = eval(`${n}${math[(i - 1) % 4]}${r[i]}`)
//     }
//     return Math.round(n)
// }

console.log(doMath("24z6 1z23 y369 89z 900b"));
console.log(doMath("1z 2t 3q 5x 6u 8a 7b"));