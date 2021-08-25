const repeatNumbers = function (data) {
  let newData=[]
  for (let i = 0; i < data.length; i++) {
    let changedToString = data[i][0].toString(); // to change the first value into string
    newData.push(changedToString.repeat(data[i][1])); // used repeat function of string and pushed the value into array
  } return newData.toString() // to return multiple set of values separated by comma
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
