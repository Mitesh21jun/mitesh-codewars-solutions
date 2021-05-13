function descendingOrder(n) {
  //...

  n = parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
  return n;
}

let a = Math.floor(Math.random() * 10000);
console.log(a);
descendingOrder(0);
