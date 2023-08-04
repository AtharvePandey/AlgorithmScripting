// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
//i.e "abde" would return c since c is missing from the sequence...
function fearNotLetter(str) {
    var strArr = strToArr(str);
    var j = 0;
    for (var i = 1; i < strArr.length; i++) {
        if (strArr[i] !== ++strArr[j].toString()) {
            return strArr[j];
        }
        else {
            j++;
        }
    }
    return undefined;
}
console.log(fearNotLetter("abce")); //return "d" since "d" is missing in the sequence...
function strToArr(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charAt(i));
    }
    return arr;
}
