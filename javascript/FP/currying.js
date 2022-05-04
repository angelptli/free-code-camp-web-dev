// Fill in the body of the add function so it uses currying to add
// parameters x, y, and z

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}

// should return 60
add(10)(20)(30);

// should return 6
add(1)(2)(3);

// should return 66
add(11)(22)(33);
