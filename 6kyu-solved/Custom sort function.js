function sort (items) {
    let temp = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
            if (items[i] > items[j]) {
                temp = items[i];
                items[i] = items[j];
                items[j] = temp;
            }
        }
    }
    return items;
}

console.log(sort([1, 3, 2, 3, 4, 1]))
console.log(sort([4, 1, 3, 2, 2, 3, 4, 1]))
console.log(sort(["abc", "adc", "acc"]));
