function repeatStringNumTimes(str, num) {
  // Return empty string if num < 0
  if (num < 0)
    return "";

  let newStr = "";
  
  for (let i = 0; i < num; i++)
    newStr += str;

  return newStr;
}

// should return the string ***
repeatStringNumTimes("*", 3);

// should return the string abcabcabc
repeatStringNumTimes("abc", 3);

// should return the string abcabcabcabc
repeatStringNumTimes("abc", 4);

// should return the string abc
repeatStringNumTimes("abc", 1);

// should return the string ********
repeatStringNumTimes("*", 8);

// should return an empty string ("")
repeatStringNumTimes("abc", -2);