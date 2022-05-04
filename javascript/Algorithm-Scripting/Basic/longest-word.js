// Return the length of the longest word in the provided sentence.
function findLongestWordLength(str) {
  let words = str.split(" ");
  let longest = 0;
  let length = 0;

  for (let word in words) {
    length = words[word].length;

    if (length > longest) {
      longest = length;
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");