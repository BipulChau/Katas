const camelCase = function (input) {
  let dataSplit = input.split(" "); // made an array of words from the input
  let newData = [];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push(dataSplit[i].charAt(0).toUpperCase() + dataSplit[i].slice(1)); //changed the first letter of each word into upper Caps and then pushed it into another array
  }
  let result = newData.join(""); // joined all the words of an array and made it into a single word
  return result.charAt(0).toLowerCase() + result.slice(1); // changed the first letter of the word into lower caps and joined the remaining letter of the word into that lower caps
};

const pascal = function (input) {
  let dataSplit = input.split(" "); // made an array of words from the input
  let newData = [];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push(dataSplit[i].charAt(0).toUpperCase() + dataSplit[i].slice(1)); //changed the first letter of each word into upper Caps and then pushed it into another array
  }
  let result = newData.join(""); // joined all the words of an array and made it into a single word
  return result;
};

const snake = function (input) {
  let dataSplit = input.split(" "); // made an array of words from the input
  let newData = [];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push(dataSplit[i]);
  }
  let result = newData.join("_"); // joined all the words of an array and made it into a single word
  return result;
};

const kebab = function (input) {
  let dataSplit = input.split(" "); // made an array of words from the input
  let newData = [];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push(dataSplit[i]);
  }
  let result = newData.join("-"); // joined all the words of an array and made it into a single word
  return result;
};

const title = function (input) {
  let dataSplit = input.split(" "); // made an array of words from the input
  let newData = [];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push(dataSplit[i].charAt(0).toUpperCase() + dataSplit[i].slice(1)); //changed the first letter of each word into upper Caps and then pushed it into another array
  }
  let result = newData.join(" "); // joined all the words of an array and made it into a single word
  return result;
};

const vowel = function (input) {
  let dataSplit = input.split(""); // made an array of words from the input
  let newData = [];
  let vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < dataSplit.length; i++) {
    if (vowels.includes(dataSplit[i])) {
      dataSplit[i] = dataSplit[i].toUpperCase();
    }
    newData.push(dataSplit[i]);
  }
  let result = newData.join(""); // joined all the words of an array and made it into a single word
  return result;
};

const consonant = function (input) {
  let dataSplit = input.split(""); // made an array of words from the input
  let newData = [];
  let vowels = ["a", "e", "i", "o", "u"];
  for (i = 0; i < dataSplit.length; i++) {
    if (!vowels.includes(dataSplit[i])) {
      dataSplit[i] = dataSplit[i].toUpperCase();
    }
    newData.push(dataSplit[i]);
  }
  let result = newData.join(""); // joined all the words of an array and made it into a single word
  return result;
};

const upper = function (input) {
  let dataSplit = input.split(" "); // made an array of words from the input
  let newData = [];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push(dataSplit[i].toUpperCase()); //changed the each letter of each word into upper case and then pushed it into another array
  }
  let result = newData.join(" "); // joined all the words of an array and made it into a single word
  return result;
};

const lower = function (input) {
  let dataSplit = input.split(" "); // made an array of words from the input
  let newData = [];
  for (i = 0; i < dataSplit.length; i++) {
    newData.push(dataSplit[i].toLowerCase()); //changed the each letter of each word into lower case and then pushed it into another array
  }
  let result = newData.join(" "); // joined all the words of an array and made it into a single word
  return result;
};

const makeCase = function (input, style) {
  if (Array.isArray(style)) {
    for (let i = 0; i < style.length; i++){
      if (style [i] === "camel") {
        input = camelCase(input);
      } else if (style [i] === "pascal") {
        input = pascal(input);
      } else if (style [i] === "snake") {
        input = snake(input);
      } else if (style [i] === "kebab") {
        input = kebab(input);
      } else if (style [i] === "title") {
        input =  title(input);
      } else if (style [i] === "vowel") {
        input = vowel(input);
      } else if (style [i] === "consonant") {
        input = consonant(input);
      } else if (style [i] === "upper") {
        input = upper(input);
      } else if (style [i] === "lower") {
        input = lower(input);
      }
    } return input;
  } else if (style === "camel") {
    return camelCase(input);
  } else if (style === "pascal") {
    return pascal(input);
  } else if (style === "snake") {
    return snake(input);
  } else if (style === "kebab") {
    return kebab(input);
  } else if (style === "title") {
    return title(input);
  } else if (style === "vowel") {
    return vowel(input);
  } else if (style === "consonant") {
    return consonant(input);
  } else if (style === "upper") {
    return upper(input);
  } else if (style === "lower") {
    return lower(input);
  }
};

/*console.log(camelCase("this is a string", "camel"));
console.log(pascal("this is a string", "pascal"));
console.log(snake("this is a string", "snake"));
console.log(kebab("this is a string", "kebab"));
console.log(title("this is a string", "title"));
console.log(vowel("this is a string", "vowel"));
console.log(consonant("this is a string", "consonant"));
console.log(upper("this is a string", "upper"));
console.log(lower("This is a String", "lower"));*/

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
