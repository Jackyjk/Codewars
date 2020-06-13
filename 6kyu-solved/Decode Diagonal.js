// Input:
// H Z R R Q
// D I F C A E A !
// G H T E L A E 
// L M N H P R F 
// X Z R P E

// Output:
// H _ _ _ _
// _ I _ _ _ _ _ !
// _ _ T _ _ _ E 
// _ _ _ H _ R _
// _ _ _ _ E

// 大概思路：从第一个开始。先右下到最后 再左上到头 再下
function getDiagonalCode (grid) {
    let x = 0, y = 0, dx = 2, dy = 1, code = '';
    grid = grid.split('\n');
    while (typeof grid[y] != 'undefined' && typeof grid[y][x] != 'undefined') {
        // 第一个字母
        code += grid[y][x];
        // 判断下一行是否有字母
        if (typeof grid[y + dy] == 'undefined') dy *= -1;
        x += dx, y += dy;
    }
    return code;
}

var grid = (
    "C \n" +
    "D o F C A E A s ! \n" +
    "G H d E L A r \n" +
    "L M N e P a F \n" +
    "X Z R P W"
);
console.log(getDiagonalCode(grid));
