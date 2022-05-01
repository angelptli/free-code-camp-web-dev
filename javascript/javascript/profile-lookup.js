// Contacts list. Contains contact objects.
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/**
 * Look up contact info given a first name and property key. If first
 * name or property key does not exist, return string that either informs
 * if the contact or property does not exist in the contact objects list. 
 * @param {*String} name A first name
 * @param {*String} prop A property key
 * @returns Contact's prop value or not found string
 */
function lookUpProfile(name, prop)
{
  let contactExists = false;
  let contact;

  // Check if name exists as a contact's first name
  for (let i = 0; i < 4; i++)
  {
    if (contacts[i].firstName == name)
    {
      contactExists = true;
      contact = contacts[i];
      break;
    }
  }

  if (contactExists)
  {
    if (contact.hasOwnProperty(prop))
    {
      return contact[prop];
    }
    else
    {
      return "No such property";
    }
  }
  else
  {
    return "No such contact";
  }

}

// Tests
lookUpProfile("Kristian", "lastName") // should return the string Vos
lookUpProfile("Sherlock", "likes") // should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry", "likes") // should return an array
lookUpProfile("Bob", "number") // should return the string No such contact
lookUpProfile("Bob", "potato") // should return the string No such contact
lookUpProfile("Akira", "address") // should return the string No such property