// Extract and return the third and fourth elements
function forecast(arr) {
  // arr.slice(index, exclusiveStop)
  arr = arr.slice(2, 4);
  return arr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));