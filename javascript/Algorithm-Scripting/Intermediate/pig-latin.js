/**
 * Convert a string str into pig latin.
 * @param {*String} str The string to be evaluated and converted into pig latin
 * @returns The pig latin version of the word stored in str
 */
function translatePigLatin(str) {
  // Return str + "way" if first letter is a vowel
  if (str.match(/^[aeiou]/))
    return str.concat("way");

  let start = "";
  let stop = 0;

  // Append starting consonants to empty string start
  for(let i = 0; i < str.length; i++) {
    if (str[i].match(/[^aeiou]/)) {
      start += str[i];
      stop++;
    }
    else
      break;
  }

  // Return str with starting consonants moved to the end and "ay" appended
  return str.slice(stop, str.length) + start + "ay";
}

translatePigLatin("consonant");