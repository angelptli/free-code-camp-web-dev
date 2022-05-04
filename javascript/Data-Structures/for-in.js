const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

/**
 * Count the number of users that are currently online.
 * @param {*Object} usersObj Object containing users and their online status
 * @returns The number of online users
 */
function countOnline(usersObj) {
  let numOnline = 0;
  for (let user in usersObj) {
    if (usersObj[user].online)
      numOnline++;
  }
  return numOnline;
}

console.log(countOnline(users));