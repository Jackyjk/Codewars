const num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ]

function RomanNumerals () { }

//* 1
RomanNumerals.prototype.toRoman = function (number) {
    let result = ""
    num.map(function (value, index) {
        while (number >= value) {
            result += roman[index]
            number -= value
        }
    })

    return result
}

RomanNumerals.prototype.fromRoman = function (roman) {
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

var RomanNumerals = new RomanNumerals()

console.log(RomanNumerals.toRoman(1991));


//* 2


// RomanNumerals.toRoman = function (number) {
//     let result = ""
//     num.map(function (value, index) {
//         while (number >= value) {
//             result += roman[index]
//             number -= value
//         }
//     })

//     return result
// }

// RomanNumerals.fromRoman = function (roman) {
//     var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
//     var numbers = roman.split('');
//     var sum = 0, i;

//     for (i = 0; i < numbers.length; i++) {
//         if (data[numbers[i]] < data[numbers[i + 1]]) {
//             sum += data[numbers[i + 1]] - data[numbers[i]];
//             i++;
//         }
//         else {
//             sum += data[numbers[i]];
//         }
//     }

//     return sum;
// }

// console.log(RomanNumerals.toRoman(1991));
// console.log(RomanNumerals.fromRoman('XXI'));


// * 3
// function RomanNumeralsHelper () {
//     this.values = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1 };
// }

// RomanNumeralsHelper.prototype.fromRoman = function (rom) {
//     var matches = rom.match(/CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/gi);
//     return matches.reduce((acc, n) => { return acc + this.values[n]; }.bind(this), 0);
// }

// RomanNumeralsHelper.prototype.toRoman = function (value) {
//     var output = "";
//     Object.keys(this.values).forEach((num) => {
//         while (value >= this.values[num]) {
//             value -= this.values[num];
//             output += num;
//         }
//     });
//     return output;
// }

// var RomanNumerals = new RomanNumeralsHelper();