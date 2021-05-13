function dataReverse(data) {
  // Your code here
    let temp = []
  let n = 8;
  while (n < data.length) {
    data.splice(n, 0, " ");
    n += 9;
  }
    data = data.join("").split(" ").reverse().join('').split('')
    for (digit in data) {
        temp.push(parseInt(data[digit]))
    }
    console.log(temp)
  return temp;
}

const data1 = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
// const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
// const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
// const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]

dataReverse(data1);
// dataReverse(data2)
// dataReverse(data3)
// dataReverse(data4)
