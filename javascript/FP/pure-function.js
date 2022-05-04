// The global variable
const bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae",
];

/**
 * The add function should add the given bookName to the end of the
 * array passed to it and return a new array. 
 * @param {*Array} arr The array containing bookList elements
 * @param {*String} bookName The name of the book to add to the list
 * @returns A new array containing the original and new book names
 */
function add(arr, bookName) {
  return [...arr, bookName];
}

/**
 * The remove function should remove the given bookName from the array
 * passed to it.
 * @param {*Array} arr The array containing bookList elements
 * @param {*String} bookName The name of the book to remove to the list
 * @returns A new array containing the original book names without bookName
 */
function remove(arr, bookName) {
  const book_index = arr.indexOf(bookName);
  let newArray = [...arr];

  if (book_index >= 0) {
    newArray.splice(book_index, 1);
    return newArray;
  }
}
