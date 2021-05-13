function arrayDiff(a, b) {
  let newArr = a.forEach((valueA, indexA) => {
    b.forEach((valueB, indexB) => {
      if (a[indexA] == b[indexB]) {
        delete a[indexA];
      }
    });
  });
  a = a.filter((a) => a != null);
  console.log(a);
}

//Best practice
// function array_diff(a, b) {
// return a.filter(e => !b.includes(e));
//}

arrayDiff([], [4, 5]);
arrayDiff([3, 4], [3]);
arrayDiff([1, 8, 2], []);
arrayDiff([1, 2, 3], [1, 2]);
