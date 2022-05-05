/**
 * Sum a range of numbers given two values that represents the start
 * and end of a range of numbers.
 * @param {*Array} arr An array containing a start and end number of a range
 * @returns The sum of the numbers from the two values in arr
 */
function sumAll(arr) {
  let sortedArr = arr.sort(function(a, b) {
    return a - b;
  });

  let sum = sortedArr[0];
  let add = sortedArr[1];

  while (add > sortedArr[0]) {
    sum += add;
    add--;
  }

  return sum;
}

// should return a number
sumAll([1, 4]);

// should return 10
sumAll([1, 4]);

// should return 10
sumAll([4, 1]);

// should return 45
sumAll([5, 10]);

// should return 45
sumAll([10, 5]);