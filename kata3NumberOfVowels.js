const numberOfVowels = function (data) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < data.length; index++) {
    if (vowels.includes(data[index])){
      count += 1;
    }
  } return count;
}

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('lighthouse labs'));
console.log(numberOfVowels('aeiou'));

