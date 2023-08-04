// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
//i.e "abde" would return c since c is missing from the sequence...

function fearNotLetter(str:string) {
    let strArr = strToArr(str); 
    let j = 0;
    for(let i = 1; i<strArr.length; i++){
        if(strArr[i].charCodeAt(0) !== strArr[j].charCodeAt(0) + 1){
            return String.fromCharCode(strArr[j].charCodeAt(0) + 1);
        }else{
            j++;
        }
    }
    return undefined; 
  }
  
  console.log(fearNotLetter("abce")); //return "d" since "d" is missing in the sequence...


  function strToArr(str:string){
    let arr:string[] = [];
    for(let i = 0; i<str.length; i++){
        arr.push(str.charAt(i));
    }
    return arr; 
  }