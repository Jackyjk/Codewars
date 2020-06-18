function solution (digits) {
    let num = 0;

    for (let i = 0; i < digits.length; i++) {
        let number = digits.substr(i, 5);
        if (Number(number) > num) {
            num = Number(number);
        }
    }
    return num;
}