// Write an asynchronous function that accepts a message string and 
// a delay time in milliseconds. The function should log the message 
// to the console after the specified delay time.
let promise = new Promise(function(resolve,reject){
    if (userDetails){
        setTimeout(resolve(`user details available`),5000);

    }else{
        setTimeout(()=>{reject(` No user details available`)},5000);
    }
});

let userDetails = "I'm comming";

let promse = new Promise(function(resolve,reject){
    if (userDetails){
        setTimeout(resolve(`user details available`),5000);

    }else{
        setTimeout(()=>{reject(` No user details available`)},5000);
    }
});
let add =()=>{
    console.log(20+30);
}
add();

const getUserDetails = async ()=>{
    let response = await promise;
    console.log({response});
    
}
getUserDetails();

// // You have an array of user IDs and a function getUserData(id)
// //  that returns a Promise with user data when given a user ID. 
// //  Write an asynchronous function that fetches and logs the data
// //   for each user ID one by one, in sequence.

const ownIds = [13, 12, 37, 42, 25];

async function fetchAndLogUserData() {
  for (const id of ownIds  ) {
    const userData = await ownIds(id);
    console.log(userData);
  }
}

fetchAndLogUserData();

// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error.
//   Write a function that calls performTask() and logs a custom 
//   success message if the task is successful, and a custom error message 
//   if there's an error.
function canHandle(){
  doTask()
  .then(()=>{
    console.log("Yeeeeey!!!! task completed successfuly!!");
  })
  .catch(()=>{
    console.log("oops task failed terribly")

  });
};

function doTask(){
return new Promise((resolve,reject) =>{
  const elegant = true;
  if(elegant){
    resolve();
  }else{
    reject();
  }
});
}
canHandle();


