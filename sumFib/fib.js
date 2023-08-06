// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
//The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
//WE NEED A SET NUMBER OF FIB NUMBERS IN THE ARRAY, RATHER THAN MAKING ONLY THE FIRST N NUMBERS...WHY NOT JUST ADD THE FIRST 200? 
function sumFibs(num) {
    return fibIntoArr(200).filter(function (curNum) {
        return curNum <= num && curNum % 2 !== 0;
    }).reduce(function (sum, val) {
        return sum + val;
    }, 0);
}
console.log(sumFibs(4)); //should return 0, 1, 1, 2, 3, 5, 8; 1 + 1 + 3 = 5 ... 
//putting fib seq into array and then using reduce in the sumFibs function to calculate the sum of all odd digit...
function fibIntoArr(numsInArr) {
    var retArr = [];
    if (numsInArr === 1) { //first number in sequence
        retArr.push(0);
        return retArr;
    }
    else if (numsInArr === 2) { //first two numbers in sequence... 
        retArr.push(0, 1);
        return retArr;
    }
    else { //first n numbers in the sequence...
        retArr.push(0);
        retArr.push(1);
        for (var index = 2; index < numsInArr; index++) {
            retArr.push(retArr[index - 2] + retArr[index - 1]);
        }
        return retArr;
    }
}
