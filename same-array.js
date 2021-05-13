function comp(a1, a2) {
  //your code here
  tempA1 = [];
  tempA2 = [];
  a1 = a1.sort();
  a2 = a2.sort();
  // console.log(a1,a2)
  tempA1 = a1.map((item) => Math.sqrt(item));
  tempA2 = a2.map((item) => Math.sqrt(item));
  if (
    a1.length === a2.length &&
    a1.every((value, index) => value === a2[index])
  )
    return true;
    if (
        a1.length === tempA2.length &&
        a1.every((value, index) => value === tempA2[index])
    ) return true;
    if (
        tempA1.length === a2.length &&
        tempA1.every((value, index) => value === a2[index])
    ) return true;
    console.log(tempA1, a2, tempA2, a1);
    return false;
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
comp(a1, a2);
