// Use splice() to remove elements from arr, so that it only contains elements
// that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

// arr.splice(index, numOfElements)
arr.splice(1, 4);

console.log(arr);

// Remove the first two elements and add replace
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
