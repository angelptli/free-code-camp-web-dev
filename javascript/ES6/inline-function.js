// Write a standard inline function. An inline function doesn't need to be
// named because we don't need to reuse it.
const magic1 = function() {
  return new Date();
};

// Do the same as above using arrow function syntax, which is syntactic sugar.
const magic2 = () => {
  return new Date();
};