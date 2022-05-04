function sentensify(str) {
  return str.split(/[^a-zA-Z]/).join(" ");
}

// should return the string May the force be with you
sentensify("May-the-force-be-with-you");

// should return the string The force is strong with this one
sentensify("The.force.is.strong.with.this.one");

// should return the string There has been an awakening
sentensify("There,has,been,an,awakening");
