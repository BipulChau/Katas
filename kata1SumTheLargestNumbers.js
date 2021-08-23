function sumLargestNumbers (num){
  let largestNum = 0;
  let secondLargestNum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largestNum){
      largestNum = num[i];
    }
  } num.splice(num.indexOf(largestNum), 1);
  for (let j = 0; j < num.length; j++) {
    if (num[j] >  secondLargestNum) {
      secondLargestNum = num[j];
    }
  } return largestNum + secondLargestNum;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
