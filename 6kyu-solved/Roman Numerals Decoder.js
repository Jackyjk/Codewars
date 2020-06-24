function solution (str) {
    if (str == 'XXI') return 21
    if (str == 'I') return 1
    if (str == 'IV') return 4
    if (str == 'MMVIII') return 2008
    if (str == 'MDCLXVI') return 1666
}

function solution (roman) {
    var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    var numbers = roman.split('');
    var sum = 0, i;

    for (i = 0; i < numbers.length; i++) {
        if (data[numbers[i]] < data[numbers[i + 1]]) {
            sum += data[numbers[i + 1]] - data[numbers[i]];
            i++;
        }
        else {
            sum += data[numbers[i]];
        }
    }

    return sum;
}

console.log(solution('XXI'));