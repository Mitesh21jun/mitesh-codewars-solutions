function arrayDiff(a, b) {
    b.map(item => {
        for (B in a) {
            if (item === a[B]) {
             a.splice(B)
         }
     }
 })
  console.log(a);
}

arrayDiff([], [4, 5]);
arrayDiff([3, 4], [3]);
arrayDiff([1, 8, 2], []);
arrayDiff([1, 2, 3], [1, 2]);
