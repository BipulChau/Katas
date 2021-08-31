const urlDecode = function (text) {
  let formattedText = text.split("=").join(" ").split("&").join(" ").split(" ");
  let finalText = {};
  //console.log(formattedText); // checking formattedText
  for (let i = 0; i < formattedText.length; i += 2) {
    finalText[formattedText[i]] = formattedText[i + 1].split("%20").join(" ");
  }
  return finalText;
};

//urlDecode("city=Vancouver&weather=lots%20of%20rain") // checking formatted text
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
