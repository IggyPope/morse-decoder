const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const morseEncodingLength = 2;
  const morseCharsTable = {
    '00': '',
    10: '.',
    11: '-',
  };

  const bitEncodingLength = 10;
  const bitEncodedChars = [];

  for (let i = 0; i < expr.length; i += bitEncodingLength) {
    bitEncodedChars.push(expr.substring(i, i + bitEncodingLength));
  }

  const morseEncodedChars = bitEncodedChars.map((char) =>
    decodeBitEncodedChar(char)
  );

  const decodedChars = morseEncodedChars.map((char) =>
    decodeMorseEncodedChar(char)
  );

  return decodedChars.join('');

  function decodeBitEncodedChar(bitEncodedChar) {
    if (bitEncodedChar === '**********') {
      return ' ';
    } else {
      let morseEncodedChar = '';

      for (let j = 0; j < bitEncodedChar.length; j += morseEncodingLength) {
        const encodedMorseChar = bitEncodedChar.substring(
          j,
          j + morseEncodingLength
        );
        const morseChar = morseCharsTable[encodedMorseChar];
        morseEncodedChar += morseChar;
      }

      return morseEncodedChar;
    }
  }

  function decodeMorseEncodedChar(morseEncodedChar) {
    if (morseEncodedChar === ' ') {
      return ' ';
    } else {
      return MORSE_TABLE[morseEncodedChar];
    }
  }
}

module.exports = {
  decode,
};
