const cakes = (recipe, available) =>
    Math.min(
        ...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0))
    );

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))