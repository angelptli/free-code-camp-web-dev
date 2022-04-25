// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'sarah breeding',
    tracks: []
  },
  5439: {
    albumTitle: 'THE REAPER'
  }
};

/**
 * Update record collection objects.
 * @param {*Object} records The object literal containing the record collection
 * @param {*Number} id The record's id value
 * @param {*String} prop The record's property
 * @param {*String} value The value assigned to a record property
 * @returns Updated record collection object
 */
function updateRecords(records, id, prop, value) {
  if (prop != 'tracks' && value != "")
  {
    // If prop isn't tracks and value isn't an empty string,
    // update or set that album's prop to value
    records[id][prop] = value;
  }
  else if (prop == 'tracks' && value != "")
  {
    // If prop is tracks but the album doesn't have a tracks property,
    // create an empty array and add value to it.
    if (!records[id].hasOwnProperty(prop))
    {
      let arr = [];
      arr.push(value);
      records[id][prop] = arr;
    }
    else
    {
      // If the album has a tracks property, add value to the end
      // of the album's existing tracks array
      records[id][prop].push(value);
    }
  }
  else if (value == "")
  {
    // Delete the given prop property from the album
    if (records[id].hasOwnProperty(prop))
      delete records[id][prop];
  }

  return records;
}

// Tests

// artist should be the string keshi
updateRecords(recordCollection, 5439, "artist", "keshi");

// tracks should have the string like i need u as the last and only element.
updateRecords(recordCollection, 5439, "tracks", "like i need u")

// artist should not be set
updateRecords(recordCollection, 2548, "artist", "")

// tracks should have the string Ease Your Mind as the last element.
updateRecords(recordCollection, 1245, "tracks", "Ease Your Mind")

// tracks should have the string 1999 as the first element.
updateRecords(recordCollection, 2468, "tracks", "Free")

// tracks should not be set
updateRecords(recordCollection, 2548, "tracks", "")

// albumTitle should be the string Ease Your Mind - Single
updateRecords(recordCollection, 1245, "albumTitle", "Ease Your Mind - Single")