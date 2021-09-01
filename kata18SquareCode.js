const squareCode = function (message) {
  let noSpaceMessage = message.split(" ").join("");
  //console.log(noSpaceMessage);// checking noSpaceMessage
  let numOfCloumns = Math.ceil(Math.sqrt(noSpaceMessage.length)); // num of char on each line
  //console.log(numOfCloumns); // checkaing numOfColumns
  let finalCode = "";
  for (let i = 0; i < numOfCloumns; i++) {
    for (let j = i; j < noSpaceMessage.length; j += numOfCloumns) {
      finalCode += noSpaceMessage[j];
    }
    finalCode += " ";
  }
  return finalCode;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
