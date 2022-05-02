// Change the regex ohRegex to match the entire phrase Oh no only when it
// has 3 to 6 letter h's. You can specify the lower and upper number of
// patterns with quantity specifiers. Quantity specifiers are used with
// curly brackets ({ and }). You put two numbers between the curly brackets -
// for the lower and upper number of patterns.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result1 = ohRegex.test(ohStr);

// Change the regex haRegex to match the word Hazzah only when it has four
// or more letter z's
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result2 = haRegex.test(haStr);

// Change the regex timRegex to match the word Timber only when it has
// four letter m's
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result3 = timRegex.test(timStr);