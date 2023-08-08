// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
//use the arguments global variable to acccss the args... 
function addTogether() {
    if (arguments.length == 1) { //case where we need to return a function else, undefined...
        var input_1 = arguments[0];
        if (typeof input_1 == "number") { //case where we return a closure...
            return function (num) { return input_1 + num; };
        }
        else {
            return undefined;
        }
    }
    else { //case where we have two numbers
        var arg1 = arguments[0];
        var arg2 = arguments[1];
        if (typeof arg1 == "number" && typeof arg2 == "number") {
            return arg1 + arg2;
        }
        else {
            return undefined;
        }
    }
}
console.log(addTogether(2, 3)); //should return 5
