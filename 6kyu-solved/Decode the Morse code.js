// decodeMorse = function (morseCode) {
//     let result = ""
//     let tmp = morseCode.trim()
//     tmp += " "
//     let stk = ""
//     for (let i = 0; i < tmp.length; i++) {
//         let s = tmp[i]
//         stk += s
//         switch (stk) {
//             case "...---... ":
//                 result += "SOS"
//                 stk = ""
//                 break
//             case "  ":
//                 result += " "
//                 stk = ""
//                 break;
//             case ". ":
//                 result += "E"
//                 stk = ""
//                 break;
//             case "- ":
//                 result += "T"
//                 stk = ""
//                 break;
//             case ".. ":
//                 result += "I"
//                 stk = ""
//                 break;
//             case "... ":
//                 result += "S"
//                 stk = ""
//                 break;
//             case ".... ":
//                 result += "H"
//                 stk = ""
//                 break;
//             case "...- ":
//                 result += "V"
//                 stk = ""
//                 break;
//             case "..- ":
//                 result += "U"
//                 stk = ""
//                 break;
//             case "..-. ":
//                 result += "F"
//                 stk = ""
//                 break;
//             case ".- ":
//                 result += "A"
//                 stk = ""
//                 break;
//             case ".-. ":
//                 result += "R"
//                 stk = ""
//                 break;
//             case ".-.. ":
//                 result += "L"
//                 stk = ""
//                 break;
//             case ".-- ":
//                 result += "W"
//                 stk = ""
//                 break;
//             case ".--. ":
//                 result += "P"
//                 stk = ""
//                 break;
//             case ".--- ":
//                 result += "J"
//                 stk = ""
//                 break;
//             case "-. ":
//                 result += "N"
//                 stk = ""
//                 break;
//             case "-.. ":
//                 result += "D"
//                 stk = ""
//                 break;
//             case "-... ":
//                 result += "B"
//                 stk = ""
//                 break;
//             case "-..- ":
//                 result += "X"
//                 stk = ""
//                 break;
//             case "-.- ":
//                 result += "K"
//                 stk = ""
//                 break;
//             case "-.-. ":
//                 result += "C"
//                 stk = ""
//                 break;
//             case "-.-- ":
//                 result += "Y"
//                 stk = ""
//                 break;
//             case "-- ":
//                 result += "M"
//                 stk = ""
//                 break;
//             case "--. ":
//                 result += "G"
//                 stk = ""
//                 break;
//             case "--.. ":
//                 result += "Z"
//                 stk = ""
//                 break;
//             case "--.- ":
//                 result += "Q"
//                 stk = ""
//                 break;
//             case "-.-.-- ":
//                 result += "!"
//                 stk = ""
//                 break;
//             case ".-.-.- ":
//                 result += "."
//                 stk = ""
//                 break;
//             case "--- ":
//                 result += "O"
//                 stk = ""
//                 break;
//         }
//     }
//     return result
// }
 function decodeMorse(morseCode) {
    function decodeMorseLetter (letter) {
        return MORSE_CODE[letter];
    }
    function decodeMorseWord (word) {
        return word.split(' ').map(decodeMorseLetter).join('');
    }
    return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}


console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));       // 'HEY JUDE'