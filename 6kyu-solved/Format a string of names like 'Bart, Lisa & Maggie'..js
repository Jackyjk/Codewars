function list (names) {
    //your code here
    if (names.length === 0) {
        return ''
    }
    else if (names.length === 1) {
        return names[0].name + ''
    } else if (names.length === 2) {
        return `${names[0].name} & ${names[1].name}`
    }
    else {
        let arr = []
        for (let i = 0; i < names.length; i++) {
            arr.push(names[i].name)
        }
        return `${arr.splice(0, arr.length - 2).join(", ")}, ${names[names.length - 2].name} & ${names[names.length - 1].name}`
    }
}

console.log(list([{ name: 'Bart1' }, { name: 'Lisa' }, { name: 'Bart2' }, { name: 'Lisa' }, { name: 'Maggie' }]))
console.log(list([{ name: 'Bart1' }, { name: 'Lisa' }]))
console.log(list([{ name: 'Bart' }]))
console.log(list([]))