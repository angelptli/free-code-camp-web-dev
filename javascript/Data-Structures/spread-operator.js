function copyMachine(arr, num) {
  let newArr = [];

  // Use spread operator to fill newArr with copies of arr.
  // This creates a multi-dimensional newArr.
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

function spreadOut() {
  let fragment = ['to', 'code'];

  // Insert fragment elements as elements of the sentence array
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  
  return sentence;
}

console.log(spreadOut());