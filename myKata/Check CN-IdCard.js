
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
    let num = 0;
    if (!/^\d{17}(\d|x)$/i.test(sId)) return "The length or format of your ID card is wrong"
    sId = sId.replace(/x$/i, "a");
    if (aCity[parseInt(sId.substr(0, 2))] == null) return "Can't find the province!!!";
    sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
    let d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "Wrong birthday date!!!";
    for (let i = 17; i >= 0; i--) num += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11);
    if (num % 11 != 1) return "Incorrect id number format";
    return true;
}




// 生成随机数字，max限制最大值，base限制最小值
function getRandom (max, base) {
    return Math.floor(Math.random() * max + (base ? base : 0));
}

// 根据前17位生成末位
function cnNewID (idcard) {
    var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
    var sum = 0, idx;
    for (var j = 0; j < 17; j++) {
        // 对前17位数字与权值乘积求和
        sum += parseInt(idcard[j], 10) * arrExp[j];
    }
    let num = Number((Math.random() + 10).toFixed())
    return arrValid[sum % num];
}

// 生成身份证号
function getIdcard () {
    var idcard = '';
    for (var i = 0; i < 18; i++) {
        if (i < 6) {
            idcard += getRandom(10)
        } else if (i == 6) {
            idcard += getRandom(2, 1) //年份第一位仅支持1和2
        } else if (i == 7) {
            idcard += idcard[6] == '1' ? 9 : 0;//两位年份规则，仅支持19和20
        } else if (i == 8) {
            idcard += idcard[6] == '1' ? getRandom(7, 3) : getRandom(2); //三位年份规则，仅支持193-199、200、201这些值
        } else if (i == 9) {
            idcard += getRandom(10) //四位年份规则,0-9
        } else if (i == 10) {
            idcard += getRandom(2);//首位月份规则
        } else if (i == 11) {
            idcard += idcard[10] == '0' ? getRandom(9, 1) : getRandom(3);//末位月份规则
        } else if (i == 12) {
            if (idcard.substr(8, 2) % 4 != 0) {//首位日期规则，闰年没有30几号
                idcard += getRandom(4, 0);
            } else {
                idcard += getRandom(3, 0);
            }
        } else if (i == 13) {
            if (idcard[12] == 0) {//末位日期规则
                idcard += getRandom(9, 1);
            } else if (idcard[12] > 0 && idcard[12] < 3) {
                if (idcard.substr(8, 2) % 4 != 0 && idcard.substr(10, 2) == '02') { // 判断闰年2月没有29号
                    idcard += getRandom(9, 1);
                } else {
                    idcard += getRandom(10);
                }
            } else {
                idcard += getRandom(2);
            }
        } else if (i > 13 && i < 17) {
            idcard += getRandom(10)
        } else if (i == 17) {
            idcard += cnNewID(idcard);
        }
    }
    return idcard;
}

var str = getIdcard() // 身份证号
console.log(str);
console.log(isCNCardID(str));