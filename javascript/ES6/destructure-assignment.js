/**
 * Replace the two assignments with an equivalent destructuring assignment.
 * It should still assign the variables today and tomorrow the values of
 * today and tomorrow from the HIGH_TEMPERATURES object.
 */
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
const { today, tomorrow } = HIGH_TEMPERATURES;

/**
 * Replace the two assignments with an equivalent destructuring assignment.
 * It should still assign the variables today and tomorrow the values of
 * today and tomorrow from the HIGH_TEMPERATURES object.
 */
 const HIGH_TEMPERATURES_2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES_2

/**
 * Replace the two assignments with an equivalent destructuring assignment.
 * It should still assign the variables lowToday and highToday the values of
 * today.low and today.high from the LOCAL_FORECAST object.
 */
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
  
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const { today: { low: theLowToday, high: theHighToday }} = LOCAL_FORECAST;

/**
 * Use destructuring assignment to swap the values of a and b so that a
 * receives the value stored in b, and b receives the value stored in a.
 */
let a = 8, b = 6;
[a, b] = [b, a]; // same as [a, b] = [6, 8]

// // We can also access the value at any index in an array with destructuring
// // by using commas to reach the desired index:
// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c); // 1, 2, 5

/**
 * Use destructuring assignment with the rest parameter to perform an effective
 * Array.prototype.slice() so that arr is a sub-array of the original array
 * source with the first two elements omitted.
 */
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list; // Change this line
  return arr;
}
const arr = removeFirstTwo(source);

/**
 * Use destructuring assignment within the argument to the function half to
 * send only max and min inside the function.
 */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({ max, min }) => (max + min) / 2.0;

