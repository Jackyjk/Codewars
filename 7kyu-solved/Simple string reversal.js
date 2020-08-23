function solve (str) {
   let s = "";
   for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] != " ") s += str[i];
      if (str[s.length] == " ") s += str[s.length];
   }
   return s;
}

// console.log(solve("our code"));

function solve (str) {
   const arr = [...str.split(` `).join(``)];
   return str.replace(/\S/g, a => arr.pop());
}
console.log(solve("i love codewars"));