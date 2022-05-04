function quickCheck(arr, elem) {
  // If returned index is not -1, then the element exists
  if (arr.indexOf(elem) != -1)
    return true;

  return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));