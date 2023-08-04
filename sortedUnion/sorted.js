// Write a function that takes two or more arrays and returns a new array of unique values in the order of the 
// original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates 
// in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// i.e [[1,2,3], [4,5,2,3,1,2,2]] should return [1,2,3,4,5]; we don't want to repeat numbers, and we want to add them in order
// but not sorted
function uniteUnique(arr) {
    return arr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
