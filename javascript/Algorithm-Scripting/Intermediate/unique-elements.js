/**
 * Solution 1 of:
 * https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-diff-two-arrays/16008
 */

function diffArray(arr1, arr2) {
  const uniqueNums = [];

  function getUnique(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) uniqueNums.push(first[i]);
    }
  }

  getUnique(arr1, arr2);
  getUnique(arr2, arr1);

  return uniqueNums;
}

// should return an array
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

// should return ["pink wool"]
diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

// should return an array with one item
diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

// should return ["diorite", "pink wool"]
diffArray(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);

// should return an array with two items
diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
);

// should return []
diffArray(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
);

// should return []
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// should return [4]
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// should return ["piglet", 4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

// should return ["snuffleupagus", "cookie monster", "elmo"]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);

// should return [1, "calf", 3, "piglet", 7, "filly"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);