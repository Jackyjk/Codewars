const strH = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'midnight']
const strM = ["o'clock", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine', 'half']

function solve (time) {
    let timeArr = time.split(':'), hh = +timeArr[0], mm = +timeArr[1]
    let mins = mm % 15 == 0 ? '' : mm == 1 || mm == 59 ? ' minute' : ' minutes'
    return hh + mm == 0 ? `${strH[hh]}` : mm == 0 ? `${strH[hh]} ${strM[mm]}` : mm <= 30 ? `${strM[mm]}${mins} past ${strH[hh]}` : `${strM[60 - mm]}${mins} to ${strH[hh + 1]}`
}

console.log(solve("13:00"));
console.log(solve("12:00"));
console.log(solve("16:00"));
console.log(solve("19:00"));
console.log(solve("22:00"));
console.log(solve("08:00"));
console.log(solve("23:37"));