// For example, start with 87:
// 87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
// 4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4

var palindromeChainLength = function (n) {
    var x = parseInt(
        ("" + n)
            .split("")
            .reverse()
            .join("")
    );
    if (n != x) {
        return 1 + palindromeChainLength(n + x);
    }
    return 0;
};


