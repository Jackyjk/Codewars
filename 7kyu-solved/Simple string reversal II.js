const solve = (st, a, b) => st.slice(0, a)
    + st.slice(a, b + 1).split("").reverse().join("")
    + st.slice(b + 1)


console.log(solve("codewars", 1, 5));