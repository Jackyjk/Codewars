const solution = (fullText, searchText) => (fullText.match(new RegExp(searchText, 'g')) || []).length


console.log(solution('aa_bb_cc_dd_bb_e', 'bb'))     // 2