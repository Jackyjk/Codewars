var data = [
    { name: 'Joe', age: 20 },
    { name: 'Bill', age: 30 },
    { name: 'Kate', age: 23 }
]

const getNames = data => data.map(item => item.name);


console.log(getNames(data))