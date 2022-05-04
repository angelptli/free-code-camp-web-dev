/**
 * Insert arr1 array elements at index n of arr2 array.
 * @param {*Array} arr1 The array that will insert its elements into arr2
 * @param {*Array} arr2 The array that will receive arr1 elements inserted at n
 * @param {*Number} n The index of arr2 where arr1 elements should insert into
 * @returns An array that contains a combination of arr1 and arr2
 */
function frankenSplice(arr1, arr2, n) {
  // arr2 elements < n + arr1 elements + n < arr2 elements
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

// should return [4, 1, 2, 3, 5].
frankenSplice([1, 2, 3], [4, 5], 1)

// should return ["a", 1, 2, "b"].
frankenSplice([1, 2], ["a", "b"], 1)

// should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
