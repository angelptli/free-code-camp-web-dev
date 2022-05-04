/**
 * Solution 2 of:
 * https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-implement-map-on-a-prototype/301230
 * 
 * Explanation:
 * The this keyword gives us access to the object we are calling myMap on.
 * From there we can use the forEach method to add elements to already declared
 * empty array as we modify each element with the given callback method.
 */

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];

  this.forEach(item => newArray.push(callback(item)));
  
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});