// function busTimer (time) {
//     let num = 0
//     let num1 = Number(time.split(":")[1]) + 5
//     if (num1 % 15 === 0) return 0
//     for (let i = 1; i <= 4; i++) {
//         if (num1 < 15 * i) {
//             num = 15 * i - num1
//             break
//         }
//     }
//     if (Number(time.split(":")[0] <= 5)) num = (6 - Number(time.split(":")[0])) * 60 - num + 5
//     return num
// }

function busTimer (time) {
    let h = 6, m = 60, num = 0
    let h1 = Number(time.split(":")[0]), m1 = Number(time.split(":")[1])
    if (h1 >= 6) {
        let num1 = m1 + 5
        if (num1 % 15 === 0) return 0
        for (let i = 1; i <= 4; i++) {
            if (num1 < 15 * i) {
                num = 15 * i - num1
                break
            }
        }
    } else {
        h1 = h - h1 - 1
        m1 = m - m1
        num = h1 * 60 + m1 - 5
    }
    return num
}

// console.log(busTimer("2:05"))
// console.log(busTimer("5:00"))
// console.log(busTimer("10:00"))
// console.log(busTimer("12:10"))
// console.log(busTimer("12:11"))
console.log(busTimer("5:56"))