function codewarResult (codewarrior, opponent) {
    // 排序策略  以大打小 
    let mineArr = codewarrior.slice().sort((a, b) => a - b);
    let oppoArr = opponent.slice().sort((a, b) => a - b);

    let vNum = 0;
    // i 对面最高的 从高的开始循环打
    for (let i = oppoArr.length - 1; i >= 0; i--) {
        //j 我方最低的 
        for (let j = 0; j < mineArr.length; j++) {
            if (mineArr[j] > oppoArr[i]) {
                vNum++;
                // 去除数组中已经对战过的
                oppoArr.splice(i, 1);
                mineArr.splice(j, 1);
                break;
            }
        }
    }
    // 不是 胜利 的次数
    let dNum = oppoArr.length - vNum;

    // 在对方寻找和我方一样的牌  寻找平局数量
    for (let i = oppoArr.length - 1, j; i >= 0; i--) {
        j = mineArr.indexOf(oppoArr[i]);
        if (j !== -1) {
            dNum--;
            oppoArr.splice(i, 1);
            mineArr.splice(j, 1);
        }
    }

    return vNum > dNum ? "Victory" : vNum < dNum ? "Defeat" : "Stalemate";
}

console.log(codewarResult([1, 4, 1], [1, 5, 3]));