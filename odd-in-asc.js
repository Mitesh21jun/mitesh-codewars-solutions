function sortArray(array) {

  let i = 0;
  oddArr = array.filter((n) => n % 2 != 0).sort((a, b) => a - b);
  array = array.map((item) => {
    if (item % 2 != 0) {
      item = oddArr[i];
      i++;
      return item;
    }
    return item;
  });
    
    return array;

}

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }
sortArray([5, 3, 2, 8, 1, 4]);
sortArray([5, 3, 1, 8, 0]);
