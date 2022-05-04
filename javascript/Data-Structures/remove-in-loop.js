function filteredArray(arr, elem) {
  let newArr = [];
  // Remove arrays that contain elem from the nested array arr
  for (let i = arr.length - 1; i != -1; i--) {
    if (arr[i].indexOf(elem) != -1)
      arr.splice(i, 1);
  }
  newArr = [...arr];
  return newArr;
}

// should return [[10, 8, 3], [14, 6, 23]]
filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18);

// should return [["flutes", 4]]
filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2);

// should return [["amy", "beth", "sam"]]
filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter");

// should return []
filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);