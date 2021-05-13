function isValidWalk(walk) {
  //insert brilliant code here
  let n = 0;
  let e = 0;
  let w = 0;
  let s = 0;

  for (item of walk) {
    switch (item) {
      case "n":
         n++;
        continue
      case "e":
         e++;
        continue
      case "w":
         w++;
        continue
      case "s":
         s++;
        continue
      default:
        continue

        
    }

  }
  if ((n === s) && (w === e)&&((n+e+w+s)===10)) return true;
  return false;

  console.log(`n:${n} e:${e} w:${w} s:${s}`);

}

isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]);
isValidWalk(["w"]);
isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]);
