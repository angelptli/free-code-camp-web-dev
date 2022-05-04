let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Same as userObj.hasOwnProperty(value)
  if ('Alan' in userObj && 'Jeff' in userObj &&
      'Sarah' in userObj && 'Ryan' in userObj)
    return true;
  return false;
}

console.log(isEveryoneHere(users));