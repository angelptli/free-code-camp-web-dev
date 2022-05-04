function mutation(arr) {
  // Return false if a letter of arr[1].toLowerCase() is not
  // included in arr[0].toLowerCase()
  for (let letter in arr[1]) {
    if (!arr[0].toLowerCase().includes(arr[1][letter].toLowerCase()))
      return false;
  }
  return true;
}

// should return false
mutation(["hello", "hey"])

// should return true
mutation(["hello", "Hello"])

// should return true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])

// should return true
mutation(["Mary", "Army"])

// should return true
mutation(["Mary", "Aarmy"])

// should return true
mutation(["Alien", "line"])

// should return true
mutation(["floor", "for"])

// should return false
mutation(["hello", "neo"])

// should return false
mutation(["voodoo", "no"])

// should return false
mutation(["ate", "date"])

// should return false
mutation(["Tiger", "Zebra"])

// should return true
mutation(["Noel", "Ole"])
