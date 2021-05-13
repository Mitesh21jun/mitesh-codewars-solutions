var isSquare = function (n) {
  if (Math.sqrt(n) % 1 == 0) {
    console.log(n);
    return true;
  }
  return false; // fix me
};

isSquare(-1);
isSquare(0);
isSquare(3);
isSquare(4);
isSquare(25);
isSquare(26);
