function truncateString(str, num) {
  if (num < str.length)
    return str.slice(0, num) + "...";
    
  return str;
}

// should return the string A-tisket....
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// should return the string Peter Piper....
truncateString("Peter Piper picked a peck of pickled peppers", 11);

// should return the string A-tisket a-tasket A green and yellow basket.
truncateString("A-tisket a-tasket A green and yellow basket",
               "A-tisket a-tasket A green and yellow basket".length);

// should return the string A-tisket a-tasket A green and yellow basket.
truncateString("A-tisket a-tasket A green and yellow basket",
               "A-tisket a-tasket A green and yellow basket".length + 2);

// should return the string A....
truncateString("A-", 1);

// should return the string Ab....
truncateString("Absolutely Longer", 2);