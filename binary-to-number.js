const binaryArrayToNumber = (arr) => {
  // your code

  let binary = arr.join("");
  return parseInt(binary, 2);
};

binaryArrayToNumber([0, 0, 0, 1]);
binaryArrayToNumber([0, 1, 1, 0]);
binaryArrayToNumber([0, 0, 1, 1]);
binaryArrayToNumber([1, 1, 1, 1]);
