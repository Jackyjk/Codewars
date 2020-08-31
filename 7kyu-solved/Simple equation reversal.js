const solve = eq => eq.split(/([*+-/])/).reverse().join("")

console.log(solve("a+b-c/d*30"))
