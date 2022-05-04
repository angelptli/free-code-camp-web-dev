// let dog = {
//   name: "Spot",
//   numLegs: 4,
//   sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
// };

// dog.sayLegs();

// Use this keyword to access numLegs property
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();