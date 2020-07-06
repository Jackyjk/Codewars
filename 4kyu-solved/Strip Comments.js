function solution (input, markers) {
    input = input.split`\n`;
    for (let i = 0; i < markers.length; i++) {
        let reg = new RegExp(`\\${markers[i]}.+`, "g");
        input = input.map(v => v.replace(reg, "").trim());
    }
    return input.join`\n`;
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));