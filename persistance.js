function persistance(num) {
    let n = 0;
  while (num > 9) {
    num += "";
    num = num.split("");
    let mul = num.reduce((digit, mul) => {
      return (mul *= parseInt(digit));
    }, 1);
    num = mul;
      n++
  }
return n}

// persistance(123);
persistance(999);
