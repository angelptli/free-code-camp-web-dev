function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,  // include constructor properties
  numLegs: 4,
  eat: function() {
    console.log("Devours soul");
  },
  describe: function() {
    console.log("I am " + this.name);
  }
};

// Use isPrototypeOf to check the prototype of beagle
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

// Prototype chain check. Object is a supertype for all objects in JS
Object.prototype.isPrototypeOf(Dog.prototype);