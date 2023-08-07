// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) 
// until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
// NOTE DO NOT USE FILTER BECAUSE WE WANT TO REMOVE UNTILE FUNCTION RETURNS TRUE, NOT REMOVE ALL ELEMENTS 
// FOR WHICH THE FUNCTION RETURNS TRUE JUST UNTIL... 
function dropElements(arr, func) {
    var tempBool = true; //keep track of how numbers we want to keep removing
    return arr.map(function (num) {
        if (func(num)) { //case where we want to stop removing
            tempBool = false;
        }
        if (tempBool) { //case where we want to keep removing
            return -Infinity; //map that element to be -Infinity
        }
        return num;
    }).filter(function (x) {
        return x !== -Infinity;
    });
}
console.log(dropElements([1, 2, 3], function (n) { return n < 3; })); //should return [1,2,3]
