function findEvenIndex(arr) {
  //Code goes here!
  let val = -1;
  arr.forEach((value, index) => {
    let l = 0;
    let r = 0;

    for (let i = index - 1; i >= 0; i--){
      l += arr[i];
    }
    for (let j = index + 1; j < arr.length; j++){
      r += arr[j];
    }
    if (l === r) {
      console.log(index)
      val= index;

    }
  })
  return val;

}

findEvenIndex([1, 2, 3, 4, 3, 2, 1]);
findEvenIndex([1, 100, 50, -51, 1, 1]);
findEvenIndex([1, 2, 3, 4, 5, 6]);
findEvenIndex([20, 10, 30, 10, 10, 15, 35]);
