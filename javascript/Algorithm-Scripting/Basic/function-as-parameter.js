function findElement(arr, func) {
  let num = 0;

  for (let n in arr) {
    num = arr[n];
    if (func(num))
      return num;
  }

  return undefined;
}

// should return 8
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })

// should return undefined
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })