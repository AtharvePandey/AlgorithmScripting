// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible 
// by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.]
function sumPrimes(num) {
    return primArr().filter(function (curNum) {
        return curNum <= num;
    }).reduce(function (acc, e) {
        return acc + e;
    }, 0);
}
console.log(sumPrimes(10)); //should return 17
//write a helper that returns an array containing all primes... 
//same idea as the sumFib algorithm... 
function primArr() {
    var retArr = [];
    for (var i = 2; i < 1000; i++) {
        if (isPrime(i)) {
            retArr.push(i);
        }
    }
    return retArr;
}
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    //this is a general loop i found online which can be used to check if a number is prime... 
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
