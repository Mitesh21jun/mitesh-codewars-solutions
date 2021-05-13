function incrementString(string) {
  // return incrementedString
  let temp = [];
  for (char in string) {
    if (string.charCodeAt(char) >= 48 && string.charCodeAt(char) <= 57) {
      temp.push(parseInt(string[char]));
      string = string.replace(string[char], " ");
    }
  }
  let tempLength = temp.length;
  temp = temp.join("");

  temp = parseInt(temp);
  if (!Number(temp)) {
    temp = 0;
  }
  temp++;
  temp = temp.toString().split("").reverse();
  while (temp.length < tempLength) {
    temp += "0";
    temp = temp.split("");
  }
  temp = temp.reverse().join("").split(',').join('')
  return string.trim() + temp;
}

//Best practice:
// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)
incrementString("foobar000");
incrementString("foo");
incrementString("foobar001");
incrementString("foobar99");
incrementString("foobar099");
incrementString("");
