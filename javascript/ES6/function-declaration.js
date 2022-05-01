// Refactor the function setGear inside the object bicycle to use
// the shorthand syntax
const bicycle = {
  gear: 2,
  // setGear: function(newGear) {
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);