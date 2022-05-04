function chunkArrayInGroups(arr, size) {
  let newArr = [];
  
  // arr is spliced per loop
  while (arr.length > 0) {
    newArr.push([...arr.splice(0, size)]);
  }

  return newArr;
}

// should return [["a", "b"], ["c", "d"]]
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// should return [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);

// should return [[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);

// should return [[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

// should return [[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

// should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);

// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
