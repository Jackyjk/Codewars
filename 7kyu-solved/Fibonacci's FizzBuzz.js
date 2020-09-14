const fibsFizzBuzz = function (n) {
    let arr = [1]
    if (n < 2) return arr
    arr.push(1)
    if (n < 3) return arr
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr.map(n => n % 15 === 0 ? 'FizzBuzz'
        : n % 5 === 0 ? 'Buzz'
            : n % 3 === 0 ? 'Fizz'
                : n)
}

console.log(fibsFizzBuzz(5))       //  [ 1, 1, 2, 'Fizz', 'Buzz' ]
console.log(fibsFizzBuzz(20))      //  [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]