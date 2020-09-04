function martingale (bank, outcomes) {
    let num = 100
    for (let i = 0; i < outcomes.length; i++) {
        if (outcomes[i] == 1) {
            bank += num
            num = 100
        }
        if (outcomes[i] == 0) {
            bank -= num
            num *= 2
        }
    }
    return bank
}


console.log(martingale(500, []))                    // 500
console.log(martingale(1000, [1, 1, 0, 0, 1]))      // 1300
console.log(martingale(0, [0, 0, 0, 0, 1, 0, 0]))   // -200
