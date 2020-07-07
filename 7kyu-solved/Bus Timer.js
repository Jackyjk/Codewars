function busTimer (time) {
    let [h, m] = time.split`:`.map(Number)
    let t = (5 + h * 60 + m) % 1440
    let x = t < 360 ? 360 : 15
    return (x - t % x) % x
}

// console.log(busTimer("2:05"))
// console.log(busTimer("5:00"))
// console.log(busTimer("10:57"))
// console.log(busTimer("0:10"))
// console.log(busTimer("5:56"))
console.log(busTimer("23:56"))