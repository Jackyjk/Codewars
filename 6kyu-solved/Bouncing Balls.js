function bouncingBall (h, bounce, window) {
    var rebounds = -1;
    if (bounce > 0 && bounce < 1)
        while (h > window) (rebounds += 2), (h *= bounce);
    return rebounds;
}

console.log(bouncingBall(3.0, 1, 1.5))
console.log(bouncingBall(3.0, 0.66, 1.5))