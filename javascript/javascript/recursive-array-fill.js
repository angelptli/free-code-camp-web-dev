/**
 * Fill and array with integers with numbers ranging from the value of
 * startNum to endNum. The array should be filled with integers in
 * ascending order. If startNum equals endNum, return an array containing
 * one element, the integer they share.
 * @param {*Number} startNum The first number to be in the array
 * @param {*Number} endNum The last number to be in the array
 * @returns Array of integers which begins at startNum and ends at endNum
 */
function rangeOfNumbers(startNum, endNum)
{
  if (startNum == endNum)
    return [startNum];
  else
  {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
};

// Tests
rangeOfNumbers(1, 5) // should return [1, 2, 3, 4, 5]
rangeOfNumbers(6, 9) // should return [6, 7, 8, 9]
rangeOfNumbers(4, 4) // should return [4]