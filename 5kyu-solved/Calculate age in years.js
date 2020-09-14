/**
 * Return the difference between a birthdate and an optional "now" date, in years
 *
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */
function getAge (birthDate, nowDate = new Date()) {
    let yy1 = birthDate.getFullYear()
    let mm1 = birthDate.getMonth() + 1
    let dd1 = birthDate.getDate()
    let yy2 = nowDate.getFullYear()
    let mm2 = nowDate.getMonth() + 1
    let dd2 = nowDate.getDate()

    return mm2 > mm1 ? (yy2 - yy1) : (mm2 < mm1 ? yy2 - yy1 - 1 : (mm2 == mm1 ? (dd2 >= dd1 ? yy2 - yy1 : yy2 - yy1 - 1) : null))
}




console.log(getAge(new Date('1913/01/01'), new Date('2013/01/01')));