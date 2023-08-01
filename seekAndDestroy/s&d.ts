// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

// basically arguments is an array available globally for any function that isn't an arrow function...

function destroyer(arr:any[]) {
    return arr.forEach((element) => {
        if(element in arguments){
            arr.splice(arr.indexOf(element), 1); 
        }
    })
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //should return and array with [1,1], since 2 and 3 are elements that need to be removed...


  //note how the function call throws an error because of extra arguments, but because this is a .ts file it will throw an error
  //we can still work with the arguments object however