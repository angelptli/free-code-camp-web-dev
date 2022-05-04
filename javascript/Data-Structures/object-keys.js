let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

/**
 * Get an array of users' names that are the keys of the obj object.
 * @param {*Object} obj Object containing users and their online status
 * @returns The names of the users in the users object
 */
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));