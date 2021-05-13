function solve(s) {
  let consonantValue = 0;

  s = s.split(/[aeiou]/);
  console.log(s);
  for (word of s) {
    let compare = 0;
    for (char in word) {
      if (word[char] == " ") continue;

      compare += word.charCodeAt(char) - 96;
      // console.log(compare)
    }
    if (consonantValue < compare) {
      consonantValue = compare;
    }
  }
  return consonantValue;
}

solve("zodiac");
solve("chruschtschov");
solve("khrushchev");
solve("strength");
solve("catchphrase");
solve("twelfthstreet");
solve("mischtschenkoana");
