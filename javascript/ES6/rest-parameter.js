// Use rest parameter to allow the sum function to take any number of
// arguments and return their sum
const sum = (...args) => {
  // const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3))