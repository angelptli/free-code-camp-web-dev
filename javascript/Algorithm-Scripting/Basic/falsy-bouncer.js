/**
 * Solution 2 of:
 * https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-falsy-bouncer/16014
 * 
 * Explanation:
 * "The Array.prototype.filter method expects a function that returns a Boolean
 * value which takes a single argument and returns true for truthy value or
 * false for falsy value. Hence we pass the built-in Boolean function."
 */

function bouncer(arr) {
  return arr.filter(Boolean);
}

// should return [7, "ate", 9]
bouncer([7, "ate", "", false, 9]);

// should return ["a", "b", "c"]
bouncer(["a", "b", "c"]);

// should return []
bouncer([false, null, 0, NaN, undefined, ""]);

// should return [1, 2]
bouncer([null, NaN, 1, 2, undefined]);