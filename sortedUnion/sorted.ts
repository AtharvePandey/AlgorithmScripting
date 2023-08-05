// Write a function that takes two or more arrays and returns a new array of unique values in the order of the 
// original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates 
// in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
// i.e [[1,2,3], [4,5,2,3,1,2,2]] should return [1,2,3,4,5]; we don't want to repeat numbers, and we want to add them in order
// but not sorted

function uniteUnique(arr:number[]) {
    let twoD: number[][] = [];
    for(let i = 0; i<arguments.length; i++){
        twoD.push(arguments[i]);
    }
    let envirornment:number[] = [];
    let retArr:number[] = []; 
    twoD.forEach(subArr => {
        for(let i = 0; i<subArr.length; i++){
            if(!(envirornment.includes(subArr[i]))){
                retArr.push(subArr[i]);
                envirornment.push(subArr[i]);
            }
        }
    });
    return retArr; 
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);  //note the extra arrays can be accessed via the envirornment global variable;
