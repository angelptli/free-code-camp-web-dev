function Bird() {
  let weight = 15;

  // Return the value stored in the private variable weight
  this.getWeight = function() {
    return weight;
  }
}