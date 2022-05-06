/**
 * Validate str to figure out if it is a valid phone number.
 * @param {*String} str A string to validate if it is a phone number.
 * @returns True if str is a valid phone number, else false.
 */
function telephoneCheck(str) {
  const validNumRegex = /^(1|1 )?(\(\d{3}\)|\d{3})(-| )?\d{3}(-| )?\d{4}$/;
  
  if (str.match(validNumRegex))
    return true;

  return false;
}

// Tests

console.log(telephoneCheck("1 555-555-5555")); // true
console.assert(telephoneCheck("1 555-555-5555"), "should return true");

console.log(telephoneCheck("1 (555) 555-5555")); // true
console.assert(telephoneCheck("1 (555) 555-5555"), "should return true");

console.log(telephoneCheck("5555555555")); // true
console.assert(telephoneCheck("5555555555"), "should return true");

console.log(telephoneCheck("555-555-5555")); // true
console.assert(telephoneCheck("555-555-5555"), "should return true");

console.log(telephoneCheck("(555)555-5555")); // true
console.assert(telephoneCheck("(555)555-5555"), "should return true");

console.log(telephoneCheck("1(555)555-5555")); // true
console.assert(telephoneCheck("1(555)555-5555"), "should return true");

console.log(telephoneCheck("555-5555")); // false
console.assert(telephoneCheck("555-5555"), "should return false");

console.log(telephoneCheck("5555555")); // false
console.assert(telephoneCheck("5555555"), "should return false");

console.log(telephoneCheck("1 555)555-5555")); // false
console.assert(telephoneCheck("1 555)555-5555"), "should return false");

console.log(telephoneCheck("1 555 555 5555")); // true
console.assert(telephoneCheck("1 555 555 5555"), "should return true");

console.log(telephoneCheck("1 456 789 4444")); // true
console.assert(telephoneCheck("1 456 789 4444"), "should return true");

console.log(telephoneCheck("123**&!!asdf#")); // false
console.assert(telephoneCheck("123**&!!asdf#"), "should return false");

console.log(telephoneCheck("55555555")); // false
console.assert(telephoneCheck("55555555"), "should return false");

console.log(telephoneCheck("(6054756961)")); // false
console.assert(telephoneCheck("(6054756961)"), "should return false");

console.log(telephoneCheck("2 (757) 622-7382")); // false
console.assert(telephoneCheck("2 (757) 622-7382"), "should return false");

console.log(telephoneCheck("0 (757) 622-7382")); // false
console.assert(telephoneCheck("0 (757) 622-7382"), "should return false");

console.log(telephoneCheck("-1 (757) 622-7382")); // false
console.assert(telephoneCheck("-1 (757) 622-7382"), "should return false");

console.log(telephoneCheck("2 757 622-7382")); // false
console.assert(telephoneCheck("2 757 622-7382"), "should return false");

console.log(telephoneCheck("10 (757) 622-7382")); // false
console.assert(telephoneCheck("10 (757) 622-7382"), "should return false");

console.log(telephoneCheck("27576227382")); // false
console.assert(telephoneCheck("27576227382"), "should return false");

console.log(telephoneCheck("(275)76227382")); // false
console.assert(telephoneCheck("(275)76227382"), "should return false");

console.log(telephoneCheck("2(757)6227382")); // false
console.assert(telephoneCheck("2(757)6227382"), "should return false");

console.log(telephoneCheck("2(757)622-7382")); // false
console.assert(telephoneCheck("2(757)622-7382"), "should return false");

console.log(telephoneCheck("555)-555-5555")); // false
console.assert(telephoneCheck("555)-555-5555"), "should return false");

console.log(telephoneCheck("(555-555-5555")); // false
console.assert(telephoneCheck("(555-555-5555"), "should return false");

console.log(telephoneCheck("(555)5(55?)-5555")); // false
console.assert(telephoneCheck("(555)5(55?)-5555"), "should return false");

console.log(telephoneCheck("55 55-55-555-5")); // false
console.assert(telephoneCheck("55 55-55-555-5"), "should return false");

console.log(telephoneCheck("11 555-555-5555")); // false
console.assert(telephoneCheck("11 555-555-5555"), "should return false");