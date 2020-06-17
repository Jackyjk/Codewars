const myLanguages = results => Object.keys(results).filter(v => results[v] >= 60).sort((a, b) => results[b] - results[a]);


console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));