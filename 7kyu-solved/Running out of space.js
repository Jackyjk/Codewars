function spacey (array) {
    for(let i=1;i<array.length;i++){
        array[i] = `${array[i-1]}${array[i]}`
    }
    return array
}

console.log(spacey(['kevin', 'has', 'no', 'space']));