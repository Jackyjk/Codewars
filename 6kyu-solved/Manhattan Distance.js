// function manhattanDistance (pointA, pointB) {
//     //TODO 
//     return Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1])
// }
const manhattanDistance = (pointA, pointB) => Math.abs(pointA[0] - pointB[0]) + Math.abs(pointA[1] - pointB[1])

console.log(manhattanDistance([1, 1], [1, 1]))
console.log(manhattanDistance([5, 4], [3, 2]))
console.log(manhattanDistance([1, 1], [0, 3]))