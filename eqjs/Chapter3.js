/*
(3 codes)


#1
Write a function min that takes two arguments and returns their minimum.
*/
var min = function(x, y) {
  if(x < y) {
    return x
  }
  return y
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


/* #2
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

var isEven = function(num) {
    num = Math.abs(num); //function returns the absolute value of a number
    if (num === 0)
        return true;
    else if (num === 1)
        return false;
    else
        return isEven(num - 2);
};
console.log(isEven(50)); //num keeps running through until reduced down to 1 or 0 
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

/* #3
Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

var countBs = function(string) {
  return countChar(string, 'B');
}

var countChar = function(stringTwo, char) {
  var arrTwo = [];
  for(var j = 0; j < stringTwo.length; j++) {
    if(stringTwo[j] === char) {
      arrTwo.push(j);
    }
  }
    return arrTwo.length;
 }
    
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4