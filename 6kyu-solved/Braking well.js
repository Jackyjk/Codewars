const dist = (v, mu) => Math.pow(v / 3.6, 2) / 2 / 9.81 / mu + v / 3.6;

const speed = (d, mu) => 3.6 * 9.81 * mu * (-1 + Math.sqrt(1 + 4 * d / 2 / 9.81 / mu));

console.log(dist(144, 0.3));
console.log(speed(159, 0.8));