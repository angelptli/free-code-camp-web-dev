/**
 * Use object property shorthand with object literals to create and return an
 * object with name, age and gender properties.
 * @param {*String} name The name of a person
 * @param {*Number} age The age of a person
 * @param {*String} gender The gender of a person
 * @returns An object containing name, age, and gender properties.
 */
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };

  // // This does the same as above
  // return {
  //   name: name,
  //   age: age,
  //   gender: gender
  // };
};