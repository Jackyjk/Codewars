// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
function productFib (prod) {
    // ...
    // let markNum = Math.sqrt(prod)
    let fibArr = [0, 1]
    for (let i = 2; i < 1000; i++) {
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
        // if (fibArr[i] > markNum) break
    }
    // console.log(fibArr);

    for (let i = 0; i < fibArr.length - 1; i++)
        if (fibArr[i] * fibArr[i + 1] == prod) {
            sum = [fibArr[i], fibArr[i + 1], true]
            break
        } else if (fibArr[i] * fibArr[i + 1] > prod) {
            sum = [fibArr[i], fibArr[i + 1], false]
            break
        }
    return sum
}


console.log(productFib(4895));
console.log(productFib(5895));

function productFib (prod) {
    var n = 0;
    var nPlus = 1;
    while (n * nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n * nPlus === prod];
}