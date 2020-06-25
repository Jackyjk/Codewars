function londonCityHacker (journey) {
    //code me up baby!
    let num = 0
    let str = 0
    for (let i = 0; i < journey.length; i++) {
        typeof journey[i] == "number" ? num++ : str++
    }
    let sum = str * 2.4 + num * 1.5
    for (let i = 0; i < journey.length; i++) {
        if (typeof journey[i] === "number" && typeof journey[i + 1] === "number") {
            sum -= 1.5;
            i++;
        }
    }
    return `£${sum.toFixed(2)}`
}

console.log(londonCityHacker([12, 'Central', 'Circle', 21]));