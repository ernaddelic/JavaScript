const findLongestWord = (str) => {
  let word = str.split(' ');
  let max = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > max) {
      max = word[i].length;
    }
  }
  return max;
}
let result = findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(result);
