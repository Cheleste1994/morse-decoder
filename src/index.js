const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
let quantityLetter = expr.length / 10;
let str = '';
let x = 0;
let y = 10;
let arrSum = [];

for (let i = 0; i < quantityLetter; i++) {
let x1 = 0;
let x2 = 2;
let arr = [];
    str = expr.slice(x, y).split("00").join('')
    x = x + 10;
    y = y + 10;
    for (i1 = 0; i1 < str.length / 2; i1++) {
        arr[i1] = str.slice(x1, x2);
        if (arr[i1] == '**') {
            arr[i1] = '10';
            i1 = str.length - 1;
        } else {
            arr[i1] === '10' ? arr[i1] = '.' : arr[i1] = '-';
        }
        x1 = x1 + 2;
        x2 = x2 + 2;
    }
Object.entries(MORSE_TABLE).map(([key, value]) => key === arr.join('') ? arrSum[i] = value : arr.join('') === '10' ? arrSum[i] = ' ': false)

}

return arrSum.join('')


}

module.exports = {
    decode
}
