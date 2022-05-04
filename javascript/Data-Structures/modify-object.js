let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

/**
 * Add to the user's friends property their new friend's name.
 * @param {*Object} userObj The user object consisting of the user's account info
 * @param {*String} friend The name of the friend to be added to userObj
 * @returns An array containing the names of the user's friends as strings
 */
function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);

  return userObj.data.friends;
}

// should return ["Sam", "Kira", "Tomo", "Pete"]
console.log(addFriend(user, 'Pete'));