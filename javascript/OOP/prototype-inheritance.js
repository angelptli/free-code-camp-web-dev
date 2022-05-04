function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Use Object.create to make two instances of Animal named duck and beagle
let duck = Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

// Modify the code so that instances of Dog inherit from Animal
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();