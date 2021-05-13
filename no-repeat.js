function isIsogram(str) {
  //...

  let uniqueChars = str.toLowerCase().split('').filter((c, index) => {
    return str.indexOf(c) === index;
  });
    if (str.length === uniqueChars.length) return true;
    return false
}

isIsogram("Dermatoglyphics");
isIsogram("isogram");
isIsogram("aba");
isIsogram("moOse");
isIsogram("isIsogram");
isIsogram("");
