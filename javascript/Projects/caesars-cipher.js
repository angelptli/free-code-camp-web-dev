/**
 * Use the Caesar cipher to decipher the message stored in str.
 * To decipher a Caesar ciphered message, shift each letter 13
 * spaces ahead or behind to get the corresponding ciphered letter.
 * @param {*String} str A ciphered string of characters.
 * @returns A string containing a deciphered message.
 */
function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let newStr = [...str];
  let i = 0;
  let shiftTo = 0;

  // Shift letters by 13 spaces in the alphabet. If the value stored in
  // the variable letter is a space or punctuation, simply add/include
  // it as is into the same index point it was originally at in newStr.
  return newStr
    .map((letter) => {
      if (newStr[i].match(/[a-zA-Z]/)) {
        shiftTo = alphabet.indexOf(letter) + 13;

        if (shiftTo >= 26) {
          shiftTo -= 26;
        } else if (shiftTo == 27) {
          shiftTo = 0;
        }
        i++;
        return alphabet[shiftTo];
      }
      i++;
      return letter;
    })
    .join("");
}

// Tests

// Deciphered: FREE CODE CAMP
console.log(rot13("SERR PBQR PNZC"));
console.assert(
  rot13("SERR PBQR PNZC"),
  "should decode to the string FREE CODE CAMP"
);

// Deciphered: FREE PIZZA!
console.log(rot13("SERR CVMMN!"));
console.assert(rot13("SERR CVMMN!"), "should decode to the string FREE PIZZA!");

// Deciphered: FREE LOVE?
console.log(rot13("SERR YBIR?"));
console.assert(rot13("SERR YBIR?"), "should decode to the string FREE LOVE?");

// Deciphered: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
console.assert(
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),
  "should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
);
