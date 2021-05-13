function removeSmallest(numbers) {
    let newArr = [...numbers];
    numbers2=[...numbers]
  newArr.sort((a,b)=>a-b);
console.log(newArr)
  n = numbers2.indexOf(newArr[0]);
    numbers2.splice(n, 1);
    console.log(numbers2)
  return numbers2;
}

removeSmallest([1, 2, 3, 4, 5]);
removeSmallest([5, 3, 2, 1, 4]);
removeSmallest([2, 2, 1, 2, 1]);
removeSmallest([324,233,258,300,135,21,382]);
