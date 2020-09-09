function comes_after (str, l) {
    let res = '';
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i].toLowerCase() == l && str[i + 1].toLowerCase() != str[i + 1].toUpperCase()) res += str[i + 1];
    }
    return res
}

console.log(comes_after("Pirates say arrrrrrrrr.", 'r'));
console.log(comes_after("king kUnta is the sickest rap song ever kNown k!", 'k'));