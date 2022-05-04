function Boss() {
  this.name = "Hilla";
  this.color = "red";
  this.numLegs = 8;
}

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Use the Dog constructor from the last lesson to create a new
// instance of Dog, assigning it to a variable hound
let hound = new Dog();

function MyDog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
// Pass in string arguments into MyDog constructor
let terrier = new MyDog("Pally", "pink");

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
// Check if myHouse is an instance of House constructor
let myHouse = new House(5);
myHouse instanceof House;

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

// Add the own properties of canary to the array ownProps
for (let property in canary) {
  if (canary.hasOwnProperty(property))
    ownProps.push(property);
}