const camelCase =  function (input) {
  let dataSplit= input.split(" "); // made an array of words from the input 
  let newData=[];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push((dataSplit[i].charAt(0).toUpperCase()+ dataSplit[i].slice(1)));//changed the first letter of each word into upper Caps and then pushed it into another array
  } let result = newData.join(""); // joined all the words of an array and made it into a single word
  return result.charAt(0).toLowerCase()+result.slice(1)// changed the first letter of the word into lower caps and joined the remaining letter of the word into that lower caps
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
console.log(camelCase("Oguwa Poguwa is a Haguwa."));
