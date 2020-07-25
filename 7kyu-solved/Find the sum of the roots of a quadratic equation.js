function roots (a, b, c) {
    let x = ((b + Math.sqrt(b * b - 4 * a * c)) / 2) * a;
    let x2 = ((b - Math.sqrt(b * b - 4 * a * c)) / 2) * a;
    if (isNaN(x + x2)) return null;
    return (-b / a).toFixed(2) * 1;
}