/**
 * Use lookaheads in the pwRegex to match passwords that are greater
 * than 5 characters long, and have two consecutive digits.
 * 
 * A positive lookahead will look to make sure the element in the search
 * pattern is there, but won't actually match it. A positive lookahead is
 * used as (?=...) where the ... is the required part that is not matched.
 * 
 * On the other hand, a negative lookahead will look to make sure the element
 * in the search pattern is not there. A negative lookahead is used as (?!...)
 * where the ... is the pattern that you do not want to be there. The rest of
 * the pattern is returned if the negative lookahead part is not present.
 */
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2,})/gi;
let result = pwRegex.test(sampleWord);