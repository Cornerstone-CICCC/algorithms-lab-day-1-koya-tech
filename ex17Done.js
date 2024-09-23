// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  // your code here
  const map = new Map();
  arr.forEach((str) => {
    if (!map.get(str)) {
      map.set(str, 1)
    } else {
      let tmp = map.get(str);
      map.set(str, tmp + 1);
    }
  })
  const pair = [...map.entries()].reduce((acc, entry) => entry[1] > acc[1] ? entry : acc);
  return pair[0];
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'