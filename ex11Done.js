// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  // your code here
  const array = text.split(' ');
  return array.reverse().join(' ');
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'