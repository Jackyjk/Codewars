// 补码 求 原码

function positiveToNegative (b) {
    let flag = false;
    for (let i = b.length - 1; i >= 0; i--) {
        if (flag) {
            b[i] = b[i] === 0 ? 1 : 0;
        }
        if (b[i] === 1) {
            flag = true;
        }
    }
    return b;
}

// assert.deepStrictEqual(positiveToNegative([0, 0, 0, 0]), [0, 0, 0, 0]);
// assert.deepStrictEqual(positiveToNegative([0, 0, 1, 0]), [1, 1, 1, 0]);
// assert.deepStrictEqual(positiveToNegative([0, 0, 1, 1]), [1, 1, 0, 1]);
// assert.deepStrictEqual(positiveToNegative([0, 1, 0, 0]), [1, 1, 0, 0]);