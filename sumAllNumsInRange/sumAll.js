// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
//I will use a recursive helper function to aid my main function... 
function sumAll(arr) {
    var temp = arr.sort(function (a, b) {
        return a - b;
    }); //this ensures that the numbers are in ascending order
    return recur(temp[0], temp[1]); //uses the recursive function to calculate the sum of all numbers from n to m inclusive... 
}
function recur(numOne, numTwo) {
    if (numOne === numTwo) {
        return numTwo;
    }
    return numOne + recur(++numOne, numTwo);
}
console.log(sumAll([1, 4])); //should return the same thing as sumAll([4,1]): 10 
