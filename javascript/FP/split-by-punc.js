function splitify(str) {
  return str.split(/[^a-zA-Z]/);
}

// should return ["Hello", "World", "I", "am", "code"]
splitify("Hello World,I-am code");

// should return ["Earth", "is", "our", "home"]
splitify("Earth-is-our home");

// should return ["This", "is", "a", "sentence"]
splitify("This.is.a-sentence");
