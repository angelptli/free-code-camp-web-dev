// Use regex to match pets dog, cat, bird, or fish
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result1 = petRegex.test(petString);

// Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex
// should not match any abbreviations or variations with spaces.
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result2 = fccRegex.test(myString);

// Apply the .match() method to extract the string coding
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result3 = extractStr.match(codingRegex);

// Using the regex starRegex, find and extract both Twinkle words from
// the string twinkleStar
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result4 = twinkleStar.match(starRegex);

// Match the strings run, sun, fun, pun, nun, and bun. Your regex
// should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result5 = unRegex.test(exampleStr);

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex
// to find all the vowels in the string quoteSample
let quoteSample1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result6 = quoteSample1.match(vowelRegex);

// Match all the letters in the string quoteSample
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result7 = quoteSample2.match(alphabetRegex);


let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi;
let result8 = quoteSample3.match(myRegex1);

// Create a single regex that matches all characters that are not
// a number or a vowel
let quoteSample4 = "3 blind mice.";
let myRegex2 = /[^0-9aeiou]/gi;
let result9 = quoteSample4.match(myRegex2);

// You want to find matches when the letter s occurs one or more times
// in Mississippi. Write a regex that uses the + sign.
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g;
let result10 = difficultSpelling.match(myRegex3);

// Create a regex chewieRegex that uses the * character to match an
// uppercase A character immediately followed by zero or more lowercase
// a characters in chewieQuote. Your regex does not need flags or character
// classes, and it should not match any of the other quotes. 
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result11 = chewieQuote.match(chewieRegex);

// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text
// "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression
// matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/;
let result12 = text.match(myRegex4);

// Use the caret character in a regex to find Cal only in the beginning
// of the string rickyAndCal
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result13 = calRegex.test(rickyAndCal);

// Use the anchor character ($) to match the string caboose at the end
// of the string caboose
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result14 = lastRegex.test(caboose);


// Use the shorthand character class \w to count the number of alphanumeric
// characters in various quotes and strings
let quoteSample5 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result15 = alphabetRegexV2.test(quoteSample5).length;

// Use the shorthand character class \W to count the number of non-alphanumeric
// characters in various quotes and strings
let quoteSample6 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result16 = quoteSample6.match(nonAlphabetRegex).length;

// Use the shorthand character class \d to count how many digits
// are in movie titles
let movieName1 = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result17 = movieName1.match(numRegex).length;

// Use the shorthand character class for non-digits \D to count how many
// non-digits are in movie titles
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result18 = movieName2.match(noNumRegex).length;

// Change the regex userCheck to fit the constraints listed above
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result19 = userCheck.test(username);

// Change the regex countWhiteSpace to look for multiple whitespace
// characters in a string
let sample1 = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result20 = sample1.match(countWhiteSpace);

// Change the regex countNonWhiteSpace to look for multiple non-whitespace
// characters in a string
let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result21 = sample2.match(countNonWhiteSpace);

// Change the regex favRegex to match both the American English (favorite)
// and the British English (favourite) version of the word
let favWord = "favorite";
let favRegex = /favou?rite/;
let result22 = favRegex.test(favWord);