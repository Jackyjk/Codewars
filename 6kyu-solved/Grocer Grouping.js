function solution (input) {
    newArr = input.split(",")
    fruit = []
    meat = []
    vegetables = []
    other = []
    for (let x = 0; x < newArr.length; x++) {
        tempArr = newArr[x].split("_")
        if (tempArr[0] == "fruit") {
            fruit.push(tempArr[1])
        } else if (tempArr[0] == "meat") {
            meat.push(tempArr[1])
        } else if (tempArr[0] == "vegetable") {
            vegetables.push(tempArr[1])
        } else {
            other.push(tempArr[1])
        }
    }

    fruit.sort()
    meat.sort()
    other.sort()
    vegetables.sort()
    return "fruit:" + fruit + "\nmeat:" + meat + "\nother:" + other + "\nvegetable:" + vegetables
}


console.log(solution("fruit_banana,vegetable_carrot,vegetable_celery,fruit_lemon,fruit_fries,canned_sardines,drink_juice,meat_beaf,meat_chicken"));
// console.log(second(['vegetable_carrot']));


