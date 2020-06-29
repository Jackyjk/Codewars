function extractIds (data) {
    return [].concat(
        ...Object.keys(data).map(function (item) {
            return item === "id" ? data[item] : extractIds(data[item]);
        })
    );
}


var data = {
    id: 1,
    items: [
        { id: 2 },
        {
            id: 3, items: [
                { id: 4 },
                { id: 5 }
            ]
        }
    ]
}

console.log(extractIds(data));