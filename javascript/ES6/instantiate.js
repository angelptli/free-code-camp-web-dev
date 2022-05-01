// Create the Vegetable class and write a constructor that
// instantiates the name property passed in as a parameter
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

// The constructor is invoked when new is called to create a new object
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'