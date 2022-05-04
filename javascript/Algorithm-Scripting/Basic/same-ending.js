function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

// should return true
confirmEnding("Bastian", "n")

// should return true
confirmEnding("Congratulation", "on")

// should return false
confirmEnding("Connor", "n")

// should return false
confirmEnding("Walking on water and developing software from a specification",
              "are easy if both are frozen", "specification")

// should return true
confirmEnding("He has to give me a new name", "name")

// should return true
confirmEnding("Open sesame", "same")

// should return false
confirmEnding("Open sesame", "sage")

// should return false
confirmEnding("Open sesame", "game")

// should return false
confirmEnding("If you want to save our world, you must hurry We dont know",
              "how much longer we can withstand the nothing", "mountain")

// should return true
confirmEnding("Abstraction", "action")