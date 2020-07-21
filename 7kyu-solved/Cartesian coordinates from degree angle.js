function coordinates (degrees, radius) {
    let rad = (degrees * Math.PI) / 180;
    let x = Math.abs(+(radius * Math.cos(rad)).toFixed(10));
    let y = Math.abs(+(radius * Math.sin(rad)).toFixed(10));
    return [x, y];
}

console.log(coordinates(90, 1))