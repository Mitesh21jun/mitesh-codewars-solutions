var countBits = function (n) {
  // Program Me
    if (n == 0) return 0;
  let rem = "";
  do {
    rem += (n % 2) + "";
    n = Math.floor(n / 2);
  } while (n > 0);
    const re = new RegExp('1', 'g');
    arr = (rem.match(re))
    
    console.log(arr.join('').length)
    
};

// countBits = n => n.toString(2).split('0').join('').length;

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);
