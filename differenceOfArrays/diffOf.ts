// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

function diffArray(arr1: any[], arr2: any[]) {
    const newArr: any[] = [];
    arr1.forEach(x => {
        if(!arr2.includes(x)){
            newArr.push(x)
        }
    });
    arr2.forEach(y => {
        if(!arr1.includes(y)){
            newArr.push(y); 
        }
    })
    return newArr;
  }
  
 console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); //return an array [4], as it is the only element not present in both arrays given

