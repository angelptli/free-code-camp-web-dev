/**
 * Checks if a given string is a palindrome.
 * @param {*String} str The string to evaluate whether it is a palindrome.
 * @returns True if str is a palindrome. False if not a palindrome.
 */
function palindrome(str) {
  // Replace all non-alphanumeric characters and ignore casing
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let mid = Math.round(str.length / 2); // middle index
  let part2 = "";

  // Get the second part of str after the middle index.
  // Leave out middle letter if str.length is an odd value.
  if (str.length % 2 != 0) {
    mid--;
    part2 = str.slice(mid + 1).split("");
  } else {
    part2 = str.slice(mid).split("");
  }

  // Get the first part of the str before the middle index
  const part1 = str.slice(0, mid);

  // Index tracker for part1
  let i = mid;

  // Return true if every letter in part2 matches part1's letters.
  // The index tracker allows to check part1's letters in reverse.
  return part2.every(function (letter) {
    if (i >= 0) {
      return letter == part1[--i];
    }
  });
}

// Tests

console.log(palindrome("eye")); // true
console.assert(palindrome("eye"), "should be true");

console.log(palindrome("_eye")); // true
console.assert(palindrome("_eye"), "should be true");

console.log(palindrome("race car")); // true
console.assert(palindrome("race car"), "should be true");

console.log(palindrome("not a palindrome")); // false
console.assert(!palindrome("not a palindrome"), "should be false");

console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.assert(palindrome("A man, a plan, a canal. Panama"), "should be true");

console.log(palindrome("never odd or even")); // true
console.assert(palindrome("never odd or even"), "should be true");

console.log(palindrome("nope")); // false
console.assert(!palindrome("nope"), "should be false");

console.log(palindrome("almostomla")); // false
console.assert(!palindrome("almostomla"), "should be false");

console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.assert(palindrome("My age is 0, 0 si ega ym."), "should be true");

console.log(palindrome("1 eye for of 1 eye.")); // false
console.assert(!palindrome("1 eye for of 1 eye."), "should be false");

console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.assert(palindrome("0_0 (: /- :) 0-0"), "should be true");

console.log(palindrome("five|_/|four")); // false
console.assert(!palindrome("five|_/|four"), "should be false");
