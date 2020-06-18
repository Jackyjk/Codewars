const capital = capitals =>
    capitals.map(
        ({ state, country, capital }) =>
            `The capital of ${state || country} is ${capital}`
    )
state_capitals = [{ state: 'Maine', capital: 'Augusta' }]
console.log(capital(state_capitals)[0]); //"The capital of Maine is Augusta"