/**
 * Replace a typo in a sentence with the given new word.
 * @param {*String} str A sentence to fix the typo in
 * @param {*String} before The target typo string
 * @param {*String} after The replacement string
 * @returns A sentence with the target typo replaced with the replacement
 */
function myReplace(str, before, after) {
  if (before.match(/^[A-Z]/)) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after.toLowerCase();
  }

  let splitStr = str.split(" ");
  let indexOfBefore = splitStr.indexOf(before);
  splitStr[indexOfBefore] = after;
  
  return splitStr.join(" ");
}

// should return the string Let us go to the mall
myReplace("Let us go to the store", "store", "mall");

// should return the string He is Sitting on the couch
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

// should return the string I think we should look down there
myReplace("I think we should look up there", "up", "Down");

// should return the string This has a spelling error
myReplace("This has a spellngi error", "spellngi", "spelling");

// should return the string His name is John
myReplace("His name is Tom", "Tom", "john");

// should return the string Let us get back to more Algorithms
myReplace("Let us get back to more Coding", "Coding", "algorithms");