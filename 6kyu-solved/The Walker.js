function solve (a, b, c, alpha, beta, gamma) {
    let xc = a * Math.cos(alpha * Math.PI / 180) - b * Math.sin(beta * Math.PI / 180) - c * Math.cos(gamma * Math.PI / 180);
    let yc = a * Math.sin(alpha * Math.PI / 180) + b * Math.cos(beta * Math.PI / 180) - c * Math.sin(gamma * Math.PI / 180);
    let oc = Math.round(Math.sqrt(xc ** 2 + yc ** 2))
    let toc = Math.atan2(yc, xc) * 180 / Math.PI;
    let degree = Math.floor(toc);
    toc = (toc - degree) * 60;
    let minute = Math.floor(toc);
    let second = Math.floor((toc - minute) * 60);
    return [oc, degree, minute, second]
}