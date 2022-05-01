// JavaScript Promise - make a promise to do something. When the task
// completes, you either fulfill your promise or fail to do so.
const makeServerRequest = new Promise((resolve, reject) => {
  // resolve = console.log("Hurray!");
  // reject = console.log("Boo!");

  // resolve(console.log("Hurray!"));
  // reject(console.log("Boo!"));

  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }

  // Add the then method to  your promise. Use result as the parameter
  // of its callback function and log result to the console.
  makeServerRequest.then(result => {
    console.log(result);
  });

  // Add the catch method to your promise. Use error as the parameter
  // of its callback function and log error to the console.
  makeServerRequest.catch(error => {
    console.log(error);
  });
});

