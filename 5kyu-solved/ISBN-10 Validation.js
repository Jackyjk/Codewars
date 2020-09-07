function validISBN10 (isbn) {
    let sum = 0, i
    for (i = 0; i < 9; i++) {
        sum += (i + 1) * +isbn[i]
    }

    if (isbn[9] == 'X')
        sum += 100
    else
        sum += 10 * +isbn[i]

    return sum % 11 == 0;
}


// (((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
console.log(validISBN10('1112223339'));