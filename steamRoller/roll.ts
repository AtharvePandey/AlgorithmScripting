// Flatten a nested array. You must account for varying levels of nesting.
// don't use methods alr provided and global variables.

// im going to use a recursive approach with a helper function that does the recursion...

function steamrollArray(arr:any[]) {
    let retArr:any[] = []
    function recurHelper(arr:any[]){
        for(let i = 0; i<arr.length; i++){
          if(Array.isArray(arr[i])){
            recurHelper(arr[i]);
          }else{
            retArr.push(arr[i])
          }
        }
    }
    recurHelper(arr);
    return retArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]])); //should return [1,2,3,4]