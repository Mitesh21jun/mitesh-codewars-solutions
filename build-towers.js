function towerBuilder(nFloors) {
  // build here
  newArr = [];
  pushChar = "";
  for (let i = 2; i <= nFloors; i++) {
    for (let j = 0; j < i; j++) {
      pushChar += "*";
    }
      console.log(pushChar+ " "+pushChar.length)
      newArr.push(pushChar);
  }
    return newArr;
}

let a = Math.floor(Math.random() * 10);
console.log(a)
towerBuilder(a);
