const reflections = (maxX, maxY) => ((maxX == maxY) || ((maxY / maxX) % 2) != 0) ? true : false


console.log(reflections(10, 10));
console.log(reflections(10, 20));
console.log(reflections(5, 25));