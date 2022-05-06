const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
};

const bob = new Person('Bob Ross');

// should return true
bob instanceof Person;

// should return undefined
bob.firstName;

// should return undefined
bob.lastName;

// should return the string Bob
bob.getFirstName();

// should return the string Ross
bob.getLastName();

// should return the string Bob Ross
bob.getFullName();

// should return the string Haskell Ross after bob.setFirstName("Haskell")
bob.getFullName();

// should return the string Haskell Curry after bob.setLastName("Curry")
bob.getFullName();

// should return the string Haskell Curry after bob.setFullName("Haskell Curry")
bob.getFullName();

// should return the string Haskell after bob.setFullName("Haskell Curry")
bob.getFirstName();

// should return the string Curry after bob.setFullName("Haskell Curry")
bob.getLastName();

