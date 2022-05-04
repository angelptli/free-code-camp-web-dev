/**
 * Solution 1 of:
 * https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-where-do-i-belong/16094
 * 
 * Explanation:
 * First I sort the array using .sort(callbackFunction) to sort it by lowest
 * to highest, from left to right. Then I use a for loop to compare the items
 * in the array starting from the smallest one. When an item on the array is
 * greater than the number we are comparing against, then we return the index.
 */

 function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num)
      return i;
  }

  return arr.length;
}

// should return 3
getIndexToIns([10, 20, 30, 40, 50], 35)

// should return 2
getIndexToIns([10, 20, 30, 40, 50], 30)

// should return 1
getIndexToIns([40, 60], 50)

// should return 0
getIndexToIns([3, 10, 5], 3)

// should return 2
getIndexToIns([5, 3, 20, 3], 5)

// should return 2
getIndexToIns([2, 20, 10], 19)

// should return 3
getIndexToIns([2, 5, 10], 15)

// should return 0
getIndexToIns([], 1)