for (var i = 1; i <= 100; i++) {
  var f = i % 3 === 0, b = i % 5 === 0;
  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}

//number = 2 digits
//target = 1 digit

var countOccurences = function(number, target){
	var arr = [];
   number = number.toString();
  for(var i = 0; i < number.length; i++) {
    if (number[i] === target.toString()) {
      arr.push(i);
    }
  }
  return arr.length;
}; //how many times a number appears in a larger number


//countOccurences using filter function

var countOccurencesFilter = function(number, target){
  number = number.toString();
  const numberArray = Array.from(number);
  target = target.toString();
  const numArray = numberArray.filter(function(num) {
     return num === target;
  });
  return numArray.length;
};