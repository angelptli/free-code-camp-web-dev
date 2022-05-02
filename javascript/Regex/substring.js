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
let myRegex4 = /<.*?>/; // Change this line
let result = text.match(myRegex4);

