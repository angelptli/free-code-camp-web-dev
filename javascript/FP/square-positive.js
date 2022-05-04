const squareList = arr => {
  let newArr = [];

  arr.map(num => {
    if (num > 0 && num % 1 === 0)
      newArr.push(Math.pow(num, 2));
  });

  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// should return [16, 1764, 36]
console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]));

// should return [9, 100, 49]
console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]));