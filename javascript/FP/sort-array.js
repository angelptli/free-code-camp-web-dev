// Use the sort method in the alphabeticalOrder function to sort
// the elements of arr in alphabetical order. The function should
// return the sorted array.

function alphabeticalOrder(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

// should return ["a", "a", "c", "d", "g", "z"]
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// should return ["a", "h", "m", "m", "n", "x"]
alphabeticalOrder(["x", "h", "a", "m", "n", "m"]);

// should return ["a", "a", "a", "a", "t", "x"]
alphabeticalOrder(["a", "a", "a", "a", "x", "t"]);

// Use the sort method in the nonMutatingSort function to sort the elements
// of an array in ascending order. The function should return a new array,
// and not mutate the globalArray variable.
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  return arr.concat([]).sort(function(a, b) {
    return a - b;
  });
}

// should return [2, 3, 5, 6, 9]
nonMutatingSort(globalArray);

// should return [1, 4, 21, 30, 100000]
nonMutatingSort([1, 30, 4, 21, 100000]);

// should return [99, 104, 140000]
nonMutatingSort([140000, 104, 99]);