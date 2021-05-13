// return masked string
function maskify(cc) {
  let mask = [...cc];
    for (char in cc) {
        if (char >= cc.length - 4) {
            mask[char]=cc[char]
            continue;
        }
      mask[char] = '#';
    }
    mask = mask.join("")
    return cc=mask.toString()
}
console.log(maskify("4556364607935616"));
