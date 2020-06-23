function second (arr) {
    if (arr.length < 1) return []
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i].split("_")[1])
    }
    return arr1
}

function solution (str) {
    let strArr1 = str.split(",")
    let fruitArr = [], meatArr = [], otherArr = [], vegetableArr = []
    for (let i = 0; i < strArr1.length; i++) {
        if (strArr1[i][0] == 'f' && strArr1[i][6] !== "f") fruitArr.push(strArr1[i])
        else if (strArr1[i][0] == 'm') meatArr.push(strArr1[i])
        else if (strArr1[i][0] == 'v') vegetableArr.push(strArr1[i])
        else otherArr.push(strArr1[i])
    }

    let fruit = second(fruitArr).length ? (second(fruitArr).length > 1 ? second(fruitArr).sort().join(",") : second(fruitArr).toString()) : ''
    let vegetable = second(vegetableArr).length ? (second(vegetableArr).length > 1 ? second(vegetableArr).sort().join(",") : second(vegetableArr).toString()) : ''
    let meat = second(meatArr).length ? (second(meatArr).length > 1 ? second(meatArr).sort().join(",") : second(meatArr).toString()) : ''
    let other = second(otherArr).length ? (second(otherArr).length > 1 ? second(otherArr).sort().join(",") : second(otherArr).toString()) : ''

    return `fruit:${fruit}\nmeat:${meat}\nother:${other}\nvegetable:${vegetable}`
}

console.log(solution("fruit_banana,vegetable_carrot,vegetable_celery,fruit_lemon,fruit_fries,canned_sardines,drink_juice,meat_beaf,meat_chicken"));
// console.log(second(['vegetable_carrot']));


