function high(str) {
  let newArr = [];
  let res = str.split(" ");
    for (word of res) {
        let score = 0;
        for (char in word) {
            if (!(word.charCodeAt(char) == 31)){
        
                score += (word.charCodeAt(char)-96);
            
            }
        
    }
    newArr.push(score);
    }
    console.log(res[(newArr.indexOf(Math.max(...newArr)))])
return newArr.indexOf(Math.max(...newArr))
}

high("man i need a taxi up to ubud");
