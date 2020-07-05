function countdown (ms) {
    let neg = ms < 0
    ms = Math.abs(ms)
    let h = 0
    let m = 0
    let s = 0
    while (ms >= 1000 * 60 * 60) {
        ms -= 1000 * 60 * 60
        h++
    }
    while (ms >= 1000 * 60) {
        ms -= 1000 * 60
        m++
    }
    while (ms >= 1000) {
        ms -= 1000
        s++
    }
    return `${neg ? `-` : `+`}${h.toString().padStart(2, 0)}:${m.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)}`
}

console.log(countdown(-154800000));
console.log(countdown(61000));