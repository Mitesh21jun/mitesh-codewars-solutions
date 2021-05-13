function duplicateCount(text) {
  let str = [];

    str = text.toLowerCase().split("").map((value, index) => (text.indexOf(value) !== index) ? value : '').join('').split('')
    str=[...new Set(str)]
    return str.length
  console.log(text, str);
}

// duplicateCount("");
duplicateCount("abcde");
duplicateCount("aabbcde");
duplicateCount("aabBcde");
duplicateCount("Indivisibility");
duplicateCount("Indivisibilities");
