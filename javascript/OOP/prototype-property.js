function Dog(name) {
  this.name = name;
}

// Add a numLegs property to the prototype of Dog. All instances
// of Dog will have this property.
Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

// The hasOwnProperty() method won't detect prototype properties.
// Add all of the own properties of beagle to the array ownProps.
// Add all of the prototype properties of Dog to the array prototypeProps.
for (let property in beagle) {
  if(beagle.hasOwnProperty(property))
    ownProps.push(property);
  else
    prototypeProps.push(property);
}