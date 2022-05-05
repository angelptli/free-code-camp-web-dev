function destroyer(arr1, ...arr2) {
  const uniqueNums = [];

  function getUnique(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) uniqueNums.push(first[i]);
    }
  }

  getUnique(arr1, arr2);
  getUnique(arr2, arr1);

  return uniqueNums;
}

// should return [1, 1]
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// should return [1, 5, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

// should return [1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5);

// should return []
destroyer([2, 3, 2, 3], 2, 3);

// should return ["hamburger"]
destroyer(["tree", "hamburger", 53], "tree", 53);

// should return [12,92,65]
destroyer(
  [
    "possum",
    "trollo",
    12,
    "safari",
    "hotdog",
    92,
    65,
    "grandma",
    "bugati",
    "trojan",
    "yacht",
  ],
  "yacht",
  "possum",
  "trollo",
  "safari",
  "hotdog",
  "grandma",
  "bugati",
  "trojan"
);
