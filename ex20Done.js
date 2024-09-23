// Exercise 20: Write a function named 'anagramGroups' that takes an array of strings and returns an array of arrays, grouping anagrams together.

function anagramGroups(arr) {
  // your code here
  let strage = [];
  let group = {};
  arr.forEach((str) => {
    strage.push(str.split('').sort().join(''));
  })
  strage.forEach((str, index) => {
    if (!group[str]) {
      group[str] = []
    }
    group[str].push(arr[index])
  })
  return Object.values(group).filter(grou => grou.length > 1);
}
console.log(anagramGroups(['bat', 'tab', 'cat', 'act'])) // [['bat', 'tab'], ['cat', 'act']]