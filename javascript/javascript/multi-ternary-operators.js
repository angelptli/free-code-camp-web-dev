/**
 * Check whether a number is positive, negative, or equal to zero
 * @param {*Number} num The number being tested
 * @returns A string indicating positive, negative, or zero
 */
function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}

checkSign(10)  // should return the string positive
checkSign(-12) // should return the string negative
checkSign(0)   // should return the string zero