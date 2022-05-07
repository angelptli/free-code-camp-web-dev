/**
 * Calculate the change to return by subtracting cash with price.
 * Check to see if there is enough cash in the cash-in-drawer (cid)
 * before returning the change. There are three cash register statuses
 * to return along with the change, and the amount of change depends
 * on the statuses:
 *
 * OPEN - There is enough change and more to spare in the cid. The cid
 *        remains open for business.
 * CLOSED - There is the exact amount of change but none to spare after
 *        the transaction. The cid closes after giving the change.
 * INSUFFICIENT_FUNDS - There is not enough change or there was not enough
 *        of certain currency units to give the exact amount of change.
 *        The transaction does not go through and remains incomplete.
 *
 * Currency units found in the cid:
 * Penny, Nickel, Dime, Quarter, Dollar, Five Dollars, Ten Dollars,
 * Twenty Dollars, One-hundred Dollars
 *
 * @param {*Number} price A total price of the transaction on the customer end.
 * @param {*Number} cash The amount the customer pays in cash.
 * @param {*Array} cid The available currency units in the cid.
 * @returns A status and the amount of change the customer will receive.
 */
function checkCashRegister(price, cash, cid) {
  // Amount expected to return to the customer
  let change = cash - price;

  // Total cash available in the given cid
  let totalCID = cid.reduce((sum, value) => sum + value[1], 0).toFixed(2);

  // If cid is the exact same amount of change return a CLOSED status
  // and all the cash that was in the cid
  if (totalCID == change) {
    return { status: "CLOSED", change: cid };
  }

  // If totalCID is less than change, return a INSUFFICIENT_FUNDS status
  // and do not return any change because the transaction does not go through
  if (totalCID < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Add additional property values into a copy of cid called extendedCID.
  // For each array in extendedCID:
  //   extendedCID[0]: currency unit
  //   extendedCID[1]: total amount available of currency unit * 100
  //   extendedCID[2]: value of an individual instance of the currency unit * 100
  //   extendedCID[3]: number of instances of currency unit
  // Note: Convert to whole numbers to avoid complications with decimal math
  change = change * 100;
  totalCID = totalCID * 100;
  const moneyValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let i = 0;

  let extendedCID = cid
    .map((unit) => [
      unit[0],
      Math.round(unit[1] * 100),
      moneyValues[i] * 100,
      Math.round(unit[1] / moneyValues[i++]),
    ])
    .reverse();

  // Make an editable copy of extendedCID without the extended values.
  // Set the total amounts of each currency unit to 0, so that
  // we can use processedCID as an accumulator to know how many of each
  // currency unit to return to the customer.
  let processedCID = extendedCID.map((unit) => {
    return [unit[0], 0];
  });

  // Go through extendedCID and subtract from change when possible.
  // Add the same amount into processedCID.
  let u = 0;
  extendedCID.map((unit) => {
    let instances = 0;
    for (let unitInstance = 0; unitInstance < unit[3]; unitInstance++) {
      if (change - unit[2] >= 0) {
        change -= unit[2]; // update: change -= one instance of currency unit
        instances++;
      } else {
        break; // Move to next currency unit if can't subtract with current one
      }
    }
    // Update amounts in processedCID
    if (instances > 0) {
      processedCID[u][1] += unit[2] * instances; // += currency unit * instances
    }
    u++;
  });

  // Return a status of OPEN if there counted enough change and more to spare
  if (change == 0) {
    return {
      status: "OPEN",
      change: processedCID
        .filter((unit) => unit[1] > 0)
        .map((unit) => {
          return [unit[0], unit[1] / 100];
        }),
    };
  }
  // Last case is there weren't enough of some currency units to allow
  // giving the exact amount of change necessary. Return a status of
  // INSUFFICIENT_FUNDS and don't return any change because transaction
  // ended up incomplete.
  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

// TESTS:
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.assert(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ]),
  'should return {status: "OPEN", change: [["QUARTER", 0.5]]}'
);

// should return {
// status: "OPEN", change: [
//   ["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
//   ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]
// ]}
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.assert(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ]),
  "should return {\n",
  'status: "OPEN", change: [\n',
  '  ["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1]\n',
  '  ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]\n',
  "]}"
);

// should return {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
console.assert(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ]),
  'should return {status: "INSUFFICIENT_FUNDS", change: []}'
);

// should return {status: "INSUFFICIENT_FUNDS", change: []}
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

// should return {
// status: "CLOSED", change: [
//   ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],
//   ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
// ]}
checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
console.assert(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ]),
  "should return {\n",
  'status: "CLOSED", change: [\n',
  '  ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],\n',
  '  ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]\n',
  "]}"
);