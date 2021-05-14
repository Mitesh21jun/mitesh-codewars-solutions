layout = ["qwertyuiop", "asdfghjkl", "zxcvbnm,."];
let tempArr = [];
let tempWord = "";

function encrypt(text, key) {
    key = key.toString().split("");
    while (key.length < 3) {
        key.push('0')
    }
  tempWord = text.toLowerCase().split("");
  tempArr = tempWord.map((value, index, array) => {
    for (word of layout) {
      for (char in word) {
        if (value === ' ') return value;
          if (value === word[char]) {
          if ((parseInt(char) + parseInt(key[layout.indexOf(word)])) > word.length - 1) {
            return word[
             ( parseInt(char) + (parseInt(key[layout.indexOf(word)])) - (word.length))
            ];
          } else {
            return word[parseInt(char) + parseInt(key[layout.indexOf(word)])];
          }
        }
      }
    }return value
  });
  for (char in text.split('')) {
    if (text[char] != tempWord[char]) {
      tempArr[char] = tempArr[char].toUpperCase()
      if ((tempArr[char] == '.')) {
        tempArr[char] = '>';
      }
      if (tempArr[char] == ',') {
        tempArr[char] = '<';
      }

    }
  }
  return tempArr.join('')
}

function decrypt(text, key) {
  key = key.toString().split("");
  while (key.length < 3) {
    key.push("0");
  }
  tempWord = text.toLowerCase().split("");
  tempArr = tempWord.map((value, index, array) => {
    for (word of layout) {
      for (char in word) {
        if (value === " ") return value;
        if (value === ">") {
          value = ".";
        }
        if (value === "<") {
          value = ",";
        }

        if (value === word[char]) {
          if (parseInt(char) - parseInt(key[layout.indexOf(word)]) < 0) {
            return word[
              parseInt(char) - parseInt(key[layout.indexOf(word)]) + word.length
            ];
          } else {
            return word[parseInt(char) - parseInt(key[layout.indexOf(word)])];
          }
        }
      }
    }return value
  });

  for (char in text.split("")) {
    if (text[char] != tempWord[char]) {
      tempArr[char] = tempArr[char].toUpperCase();
    }
    if (text[char] === '>') {
      tempArr[char]=tempArr[char].toUpperCase()
    }
    if (text[char] === '<') {
      tempArr[char]=tempArr[char].toUpperCase()
    }
  }
return tempArr.join('')
}

// decrypt("S", 111);
// decrypt("Smb", 212);
// decrypt("Wave", 0);
// decrypt("Tg.y", 345);
decrypt(">fdd", 134);
decrypt(">gff", 444);
// decrypt("Iaqh qh g iyhi,", 348);
// decrypt(
//   "Sr pgi jlpl Jr,lqlage Zlow Piapc I.skiaa dw. l.s ibnepizi.p ugi. de.se.f l arkwper.c",
//   583
// );

// encrypt("A", 111);
// encrypt("Abc", 212);
// encrypt("Wave", 0);
// // encrypt("Wave", 345);
// encrypt("Ball", 134);
// // encrypt("Ball", 444);
// // encrypt("This is a test.", 348);
// encrypt(
//   "Do the kata Kobayashi Maru Test. Endless fun and excitement when finding a solution.",
//   583
// );
