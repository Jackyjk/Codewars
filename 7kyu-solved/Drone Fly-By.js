function flyBy (lamps, drone) {
    let l = lamps.length, d = drone.length;
    if (d >= l) return 'o'.repeat(l)
    else {
        return `${'o'.repeat(d)}${'x'.repeat(l - d)}`
    }
}

console.log(flyBy('xxxxxx', '====T'));
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'));