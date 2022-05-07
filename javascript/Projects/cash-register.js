function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let totalCID = cid.reduce((sum, value) => sum + value[1], 0).toFixed(2);

  // If cash register has just the exact amount of change to give
  // back and then becomes empty from the transaction, return a
  // status of closed and the cid amount.
  if (totalCID == change) {
    return { status: "CLOSED", change: cid };
  }

  // Check if there are insufficient funds to give as change
  // and return status immediately
  if (totalCID < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Add a third property value to count instances of each currency unit
  // and reverse the order of currency units in the array.
  // Work with whole numbers by multiplying the decimals by 100 to
  // bypass flaw in decimal arithmetic (extra decimals in decimal math).
  const moneyValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let i = 0;
  change = change * 100;
  totalCID = totalCID * 100;
  let extendedCID = cid
    .map((unit) => [
      unit[0],
      Math.round(unit[1] * 100),
      moneyValues[i] * 100,
      Math.round(unit[1] / moneyValues[i++]),
    ])
    .reverse();

  console.log(extendedCID);
  console.log(change);
  console.log(totalCID);

  // // If counted dollars isn't the exact amount parsed earlier, add
  // // missing amount to changeCents
  // if (hasCents && countDollars > changeCents2) {
  //   changeCents1 += countDollars - changeCents2;
  //   let v = 0;

  //   extendedCID.map((unit) => {
  //     let instances = 0;
  //     for (let unitInstance = 0; unitInstance < unit[3]; unitInstance++) {
  //       if (changeCents1 - unit[2] >= unit[2]) {
  //         changeCents1 -= unit[2];  // update changeCents1
  //         countCents += unit[2];   // update countCents
  //       } else {
  //         break;
  //       }
  //     }
  //     // Update amounts in processed cid
  //     if (instances > 0) {
  //       processedCID[u][1] -= (unit[2] * instances).toFixed(2);
  //       v++;
  //     }
  //   });
  // }

  // // If counted dollars plus cents go over totalCID, return a status
  // // of insufficient funds
  // if (countDollars + countCents > totalCID) {
  //   return { status: "INSUFFICIENT_FUNDS", change: [] };
  // }
  // console.log(processedCID);

  // console.log(processedCID.filter((unit) => unit[1] > 0).map((unit) => {
  //   return [unit[0], unit[1] * 100 / 100];
  // }));

  // Return status of cid still open and the remaining change
  // available in the cid
  // return {
  //   status: "OPEN",
  //   change: processedCID.reverse(),
  // };
}

// // should return {status: "OPEN", change: [["QUARTER", 0.5]]}
// console.log(checkCashRegister(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]));

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

// // should return {status: "INSUFFICIENT_FUNDS", change: []}
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);

// // should return {status: "INSUFFICIENT_FUNDS", change: []}
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);

// // should return {
// // status: "CLOSED", change: [
// //   ["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],
// //   ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]
// // ]}
// checkCashRegister(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
