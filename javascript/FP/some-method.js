function checkPositive(arr) {
  return arr.some(function(currentValue) {
    return currentValue > 0;
  });
}

// should return true
checkPositive([1, 2, 3, -4, 5]);

// should return true
checkPositive([1, 2, 3, 4, 5]);

// should return false
checkPositive([-1, -2, -3, -4, -5]);
