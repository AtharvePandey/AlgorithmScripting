// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
// until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
// NOTE DO NOT USE FILTER BECAUSE WE WANT TO REMOVE UNTILE FUNCTION RETURNS TRUE, NOT REMOVE ALL ELEMENTS 
// FOR WHICH THE FUNCTION RETURNS TRUE JUST UNTIL... 

function dropElements(arr: number[], func: (any)) {
    let tempBool = true; //keep track of how numbers we want to keep removing
    return arr.map(num => { //the map will basically make all elements --Infinity until the first element that returns true
        if(func(num)){ //case where we want to stop removing
            tempBool = false; 
        }
        if(tempBool){ //case where we want to keep removing
            return -Infinity; //map that element to be -Infinity
        }
        return num;
    }).filter(x => {
        return x !== -Infinity; 
    })
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 3; })); //should return [1,2,3]