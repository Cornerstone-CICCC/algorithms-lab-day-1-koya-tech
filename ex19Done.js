// Exercise 19: Write a function named 'flattenObject' that takes a nested object and returns a new object with no nested properties.

// function flattenObject(obj) {
// your code here

function flattenObject(obj, parentKey = '', result = {}) {
  for (const key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, result);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
}

console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 })) // { 'a.b.c': 1, d: 2 }