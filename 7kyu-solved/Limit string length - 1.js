const solution = (string, limit)=>(string.split``.length <= limit)? string : `${string.split``.splice(0, limit).join``}...`

console.log(solution('Testing String', 8));