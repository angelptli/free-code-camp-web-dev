const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

/**
 * Add to an array the result object's failure property included in
 * list element (li) string.
 * @param {*Object} arr The object's property
 * @returns An array of failure items.
 */
function makeList(arr){
  const failureItems = [];

  // Use a template literal to create each string in the array
  for (let i = 0; i < 3; i++)
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);

  return failureItems;
}

const failuresList = makeList(result.failure);