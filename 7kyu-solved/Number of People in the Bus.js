var number = function (busStops) {
    // Good Luck!
    let first = 0, second = 0
    for (let i = 0; i < busStops.length; i++) {
        first += busStops[i][0]
        second += busStops[i][1]
    }
    return first - second
}

console.log(number([[10, 0], [3, 5], [5, 8]]));