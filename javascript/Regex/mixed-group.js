// Check for the names of Franklin Roosevelt or Eleanor Roosevelt in a case
// sensitive manner and it should make concessions for middle names. Assign
// true or false to result depending on whether a regex match exists.
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Franklin D.|Eleanor) Roosevelt/;
let result1 = myRegex.test(myString);

// Use capture groups in reRegex to match a string that consists of only the
// same number repeated exactly three times separated by single spaces
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result2 = repeatNum.match(reRegex);


// Write a regex fixRegex using three capture groups that will search for each
// word in the string one two three. Then update the replaceText variable to
// replace one two three with the string three two one and assign the result
// to the result variable. Make sure you are utilizing capture groups in the
// replacement string using the dollar sign ($) syntax.
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result3 = str.replace(fixRegex, replaceText);