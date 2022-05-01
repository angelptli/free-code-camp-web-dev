// Write a standard inline function. An inline function doesn't need to be
// named because we don't need to reuse it.
const magic1 = function() {
  return new Date();
};

// Do the same as above using arrow function syntax, which is syntactic sugar.
const magic2 = () => {
  return new Date();
};

// Write inline functions that accept parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); // display [1, 2, 3, 4, 5]

const num = arg => arg * 2;
console.log(num(4)); // display 8

// Set default parameter to so that it will add 1 to number if value is not
// specified.
const increment = (number, value = 1) => number + value;