//implement each
var each = function(collection, action) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      action(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      action(collection[key], key, collection);
    }
  }
};

//implement map
var map = function (collection, iterator) {
  var result = [];
  each(array, function(element, index, array) {
    arr.push(iterator(element, index, array))
  });
return result; //array
}


//use map to produce each element divided by five
var mapNumbers = [5, 10, 15, 20, 25, 30, 35, 40];
var mappedNumbers = map(mappedNumber, function(element, index, array) {
  return element/5;
});


//implement the function filter
var filter = function(collection, test) {
  var result = [];
  each(collection, function(e, i, a) {
    if(test(e, i, a)) { //conditional returns true or false
      result.push(e); //push in true values
    }
  })
  return result;
}


//set filteredNumbers to the result of filtering the array filterNumbers to produce only odd numbers
var filteredNumbers = [1, 2, 3, 4, 5,6, 2, 6, 7];
var filteredNumbers = filter(filterNumbers, function(number, i, a) {
  return number % 2 === 1;
})

//implement reduce
function reduce(array, action, seed) {
  array.forEach(function(value, index, array) {
    if(seed === undefined && index === 0) {
      seed = array[0];
    } else {
      seed = action(seed, value, index)
    }
  });
  return seed;
}

//use reduce 
var arr = [1, 2, 3, 4, 5];
var arrSum = reduce(arr, function(previousResult, value, index) {
  return previousResult / value;
}, (1));
console.log(arrSum);

//use reduce to condense array
var cookies = [['sugar', 'chocolate chip'], ['big', 'small'], ['sugar free', 'loads o sugar']].reduce(function(yum, yummy) {
  return yum.concat(yummy);
}, []);
//'cookies to buy: '
console.log(cookies);
delete(cookies[1]);
console.log(cookies);


/*
zip: Designed to group elements; 
        the first array contains the first elements of the given arrays, 
        the second array contains the second elements of the given arrays, 
        and so on.

@param {array1, array2, ...}

@return {array1, array2, ...} new array of grouped elements

Examples:

_.zip(['a', 'b'], [1, 2], [true, false]); // => [['a', 1, true], ['b', 2, false]]

*/

// function zip(arrayOne, arrayTwo) {
// var args = Array.prototype.slice.call(arguments);
//     each(args, )
//     });
// }

// module.exports.zip = zip;

/*
concatAll:

*/
function concatAll() {
	var results = [];
	each(function(subArray) {
   results = results.concat(subArray);
	});

	return results;
};

module.exports.concatAll = concatAll;

/*
//accepts the same arguments as map except it works for Objects
//you must then use mapObject and use it on the input given below.
//Then define a callback function, format, to be passed into mapObject so that we get the output below. 
//format should receive two arguments, the key and value.

Input
Object
Output
Object with formatted values

Constraints:
Do not alter the boilerplate
You can hard code "biography" in format
Do not hard code anything else
Do not create any other functions
*/

var mapObject = function(object, callback) {
  const mapObject = {};
  for (let key in object) {
    mapObject[key] = callback(key, object[key]);
  }
	return mapObject;
};

var input = {
    firstName: "James",
    lastName: "Hu",
    gender: "Male",
    biography: "Oh hey, I'm just a guy"
};

var format = function(key, value) {
  if (key === 'biography') {
    return value.toLowerCase();
  } else {
     return value.toUpperCase();
  }
   
};
console.log(mapObject(input, format));

//function tells what stair number you are on

//I: string => example: countParenths('((')
//O: number (a stair count)
//C: use reduce
//E: if at ')' while already at stairCount 0, can NOT go negative

// ( = UP 1 set of stairs
// ) = DOWN 1 set of stairs
// can NOT be on a negative number stair

const countParenths = function(parenths) {
  parenths = Array.from(parenths);
  const parenthsPlusOne = '(';
  const parenthsMinusOne = ')';
  
 	return parenths.reduce(function(stairCount, stairValue) {
   if(stairValue === parenthsPlusOne){
    return stairCount + 1;       
   } else if(stairValue === parenthsMinusOne){//if we're supposed to subtract 1,
     return (stairCount <= 0) ? 0 : stairCount - 1; //if (stairCount <= 0) true return 0, if false return stairCount - 1
   } else {
     return stairCount;
   }
  }, 0);
};