function getTotalSundays (yearInit, yearEnd) {
    let count = 0
    if (yearEnd === undefined) yearEnd = yearInit
    for (let i = yearInit; i <= yearEnd; i++) {
        for (let j = 0; j < 12; j++) {
            if (new Date(i, j, 1).getDay() === 0) {
                count++;
            }
        }
    }
    return count
}

function getTotalSundays (x, y = x) {
    for (var r = 0; x <= y; x++) for (var z = 0; z < 12; z++) if (new Date(x, z, 1).getDay() == 0) r++
    return r;
}

console.log(getTotalSundays(1901, 2000));
console.log(getTotalSundays(1991, 2017));
console.log(getTotalSundays(1991));
console.log(getTotalSundays(2017));