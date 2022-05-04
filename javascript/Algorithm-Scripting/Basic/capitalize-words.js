function titleCase(str) {
  // Fill array with the lower case words of str
  let words = str.toLowerCase().split(" ");

  // Make str an empty string
  str = ""

  // Convert each word in words array into capitalized words.
  // Add each word back to str along with space delimiter.
  for (let word in words) {
    str += words[word][0].toUpperCase() + words[word].slice(1) + " ";
  }

  // Return capitalized str without the last space present at the end of str
  return str.slice(0, str.length - 1);
}

// should return the string I'm A Little Tea Pot
titleCase("I'm a little tea pot");

// should return the string Short And Stout
titleCase("sHoRt AnD sToUt");

// should return the string Here Is My Handle Here Is My Spout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");