function fearNotLetter(str) {
  if (str == "abcdefghijklmnopqrstuvwxyz")
    return undefined;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const startIndex = alphabet.indexOf(str[0]);

  let slicedAlphabet = alphabet.slice(startIndex, startIndex + str.length + 1);
  let missingLetter = "";

  for (let i = 0; i < slicedAlphabet.length; i++) {
    if (str.indexOf(slicedAlphabet[i]) === -1) {
      missingLetter = slicedAlphabet[i];
      break;
    }
  }
  
  return missingLetter;
}

// should return the string d
fearNotLetter("abce");

// should return the string i
fearNotLetter("abcdefghjklmno");

// should return the string u
fearNotLetter("stvwx");

// should return the string e
fearNotLetter("bcdf");

// should return undefined
fearNotLetter("abcdefghijklmnopqrstuvwxyz");