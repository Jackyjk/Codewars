const aCity = {
    11: "Beijing", 12: "Tianjin", 13: "Hebei", 14: "Shanxi", 15: "Inner Mongolia",
    21: "Liaoning", 22: "Jilin", 23: "Heilongjiang", 31: "Shanghai", 32: "Jiangsu", 33: "Zhejiang",
    34: "Anhui", 35: "Fujian", 36: "Jiangxi", 37: "Shandong", 41: "Henan", 42: "Hubei",
    43: "Hunan", 44: "Guangdong", 45: "Guangxi", 46: "Hainan", 50: "Chongqing", 51: "Sichuan"
    , 52: "Guizhou", 53: "Yunnan", 54: "Tibet", 61: "Shaanxi", 62: "Gansu", 63: "Qinghai",
    64: "Ningxia", 65: "Xinjiang", 71: "Taiwan", 81: "Hong Kong", 82: "Macau", 91: "Foreign"
}
/**
 *CN-IdNum Validation,for real
 *
 * @param {*} sId
 * @returns
 */

function isCNCardID (sId) {
    let num = 0, str = []
    if (!/^\d{17}(\d|x)$/i.test(sId)) str.push("The length or format of your ID card is wrong")
    sId = sId.replace(/x$/i, "a")
    if (aCity[parseInt(sId.substr(0, 2))] == null) str.push("Can't find the province!!!")
    sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))
    let d = new Date(sBirthday.replace(/-/g, "/"))
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) str.push("Wrong birthday date!!!")
    for (let i = 17; i >= 0; i--) num += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
    if (num % 11 != 1) str.push("Incorrect id number format")
    return str.length > 0 ? str.join`,` : true
}

console.log(isCNCardID('91378519541031177'));
