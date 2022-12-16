//Problem solution explaination**
//This code defines a function hasTargetSum that takes an array and a target number as its arguments.
// It loops through each number in the array and checks if there is another number in the rest of the
// array that, when added to the current number, equals the target number. If such a number is found, 
//the function returns true, otherwise it returns false at the end of the loop.

function hasTargetSum(array, target) {
    for(let i = 0; i < array.length; i++) {
    const x = target - array[i]
    for (let j = i+1; j < array.length; j++) {
        if(array[j] === x){
          return true
        }
    } 
  }
  return false  
  }

/* 
  Write the Big O time complexity of your function here
    The complexity is "O(n*)" since it involves nested iterations, hence: "O(n)"
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 6, 3], 5));
}

module.exports = hasTargetSum;