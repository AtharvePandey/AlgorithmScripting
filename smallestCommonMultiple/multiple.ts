// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    let minMax = arr.sort((a:number, b:number) => {
        return a-b; //remember arr.sort() returns a sorted array, but only elements pushed are ones that return negative in the callback... 
    });
    let [min,max] = minMax; //renamed variables min and max at the sorted arr...
    let multiple = max; 
    for(let i = max - 1; i>=min; i--){
        multiple = lcm(multiple, i);
    }
    return multiple;

  }
  
  smallestCommons([1,5]);

//the process to calculate least common multiple between two numbers is to multiply two numbers and then divide by the gcd of both of the numbers
//the above is by mathamatical definition...

  //writing a gcd helper function; gcd is the greatest common divisor between two numbers a and b...
  //i.e to find the gcd of 3 and 5 for a and b respectivley, 
  //while b isnt zero, let temp = 5, b reassigns to 3%5 which is 3, and a = 5. (this is the first iteration of the while loop)
  //temp is 3, b reassigns to 5%3 which is 2 and then a = 3 (second iteration);; 
  //temp is 2, b reassigns to 3 % 2 which is 1, and a reassigns to 2 (third iteration)
  //temp is 1, b reassigns to 2 % 1 which is 1 and a reassigns to 1 (fourth iteration)
  //temp is 1, b reassigns to 1 % 1 which is zero, and a reassigns to 1(fifth iteration)
  //b is 0 so loop breaks and a is returned, so 1 is returned so 1 is the gcd of a and b...  

  function gcd(a:number, b:number):number{
    while(b!=0){
        const temp = b;
        b = a % b;
        a = temp
    }
    return a;
  }

  //writing a function that returns the least common multiple 
  
  function lcm(a:number, b:number):number{
    return (a*b)/gcd(a,b); 
  }