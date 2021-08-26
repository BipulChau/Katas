const multiplicationTable = function (maxValue) {
  let table="";
  let multiplyData;
  for (i = 1; i <= maxValue; i++) {
    for (j =1; j <= maxValue; j++){
      multiplyData=i*j + " ";
      table+=multiplyData
    } table = table + '\n';
  } return table;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

/*const multiplicationTable = function(maxValue) {
  let result = "";
  for(let i = 1; i <= maxValue; i++){
  for(let j = 1; j <= maxValue; j++){
  result = (result + (i * j))+" ";
  }
  result = result+"\n"
  }
  return result;
  }

  console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10)*/