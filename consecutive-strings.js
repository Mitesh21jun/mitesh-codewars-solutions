function longestConsec(strarr, k) {
  // your code
  let longestWord = '';
    
  if (strarr.length == 0 || k > strarr.length || k <= 0)   return longestWord;

  let str = "";
  let newArr = []
  console.log(strarr);
 strarr.map((value, index, array) => {
     for (i = 0; i < k; i++) {
         if(!strarr[index + i])break;
      str += strarr[index + i];
    }
     newArr.push(str);
     str=''
  });
    for (item of newArr) {
        if (item.length > longestWord.length) {
            longestWord = item;
        }      
    }
    console.log(longestWord)
    return longestWord;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2);
longestConsec(
  [
    "ejjjjmmtthh",
    "zxxuueeg",
    "aanlljrrrxx",
    "dqqqaaabbb",
    "oocccffuucccjjjkkkjyyyeehh",
  ],
  1
);
longestConsec([], 3);
longestConsec(
  [
    "itvayloxrp",
    "wkppqsztdkmvcuwvereiupccauycnjutlv",
    "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
  ],
  2
);
longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2);
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2);
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3);
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15);
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0);
