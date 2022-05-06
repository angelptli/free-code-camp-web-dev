// Write a function that takes two or more arrays and returns a new array
// of unique values in the order of the original provided arrays.

function uniteUnique() {
  let uniqueNums = [];
  let args = [...arguments];

  while (args.length != 0) {
    for (let i = 0; i < args[0].length; i++) {
      if (uniqueNums.indexOf(args[0][i]) === -1)
        uniqueNums.push(args[0][i]);
    }
    args.shift();
  }
  return uniqueNums;
}

// should return [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1]);

// should return [1, 2, 3, 5, 4, 6, 7, 8]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

// should return [1, 3, 2, 5, 4, 6]
uniteUnique([1, 3, 2], [5, 4], [5, 6]);

// should return [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]);