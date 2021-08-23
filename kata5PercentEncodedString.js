/*const urlEncode = function(text) {
  let newText=text.trim();
  let newArray=[];
  for (let j = 0; j < newText.length; j++){
    newArray.push(newText[j]);
    } for (let i =0; i < newArray.length; i++){
      if(newArray[i]===" "){
        newArray[i]="%20"
      }
    } let encodedString='';
    for (l = 0; l < newArray.length; l++){
      encodedString+=newArray[l];
    } return encodedString;
  }  
  


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));*/

const urlEncode = function(text) {
  let newText = text.trim(); // removing surrounding white space
  let encodedText = newText.replace(" ", "%20"); // changing first white space in between string
  for (let i = 0; i < encodedText.length; i++){
    encodedText = encodedText.replace(" ", "%20"); // changing remaining white space in between string
  } return encodedText
  }  
  
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

