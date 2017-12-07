/* 
(5 codes)


#1
Flattening
Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the input arrays.
*/

var arrays = [[1, 2, 3], [4, 5], [6]];
var reducedArray = function(arrays) {
  return arrays.reduce(function(previousResult, currentValue, seed) {
  	return previousResult.concat(currentValue);
  }, []);
};
console.log(reducedArray([[1, 2, 3], [4, 5], [6]]));
// → [1, 2, 3, 4, 5, 6]

/* #2
Mother-child age difference
Using the example data set from this chapter, compute the average age difference between mothers and children (the age of the mother when the child is born). You can use the average function defined earlier in this chapter.
Note that not all the mothers mentioned in the data are themselves present in the array. The byName object, which makes it easy to find a person’s object from their name, might be useful here.
*/

var ancestry =[
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
];

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function each(collection, func) {
    if(Array.isArray(collection)) {    
       for(var i = 0; i < collection.length; i++) { 
           func(collection[i], i, collection); 
       } 
    } else if(typeof collection === 'object') {  
        for(var key in collection) {
            func(collection[key], key, collection);
        }
    }
};

function filter(array, func) {
    var newArray = [];
    each(array, function (value, index, collection) {
        if (func(value, index, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

function map(array, func) {
  var newarray = [];
  each(array, function(e, i, a) {
    newarray.push(func(e, i, a));
  });
  return newarray;
};

function reduce(array, func, seed) {
    var arrayToIterate = array;
    var previousResult;
    var indexModifier = 0;
    if (seed !== null && seed !== undefined) { 
       previousResult = seed;
    } else {
       previousResult = array[0]; 
       arrayToIterate = array.slice(1, array.length); 
       indexModifier = 1; 
    }
    each(arrayToIterate, function(value, index, collection) {
       previousResult = func(previousResult, value, index + indexModifier); 
    });
    return previousResult; 
}

var hasKnownMother = filter(ancestry, function(e, i, a) {
  return e.hasOwnProperty('mother') && e.mother !== null && byName[e.mother];
});
var motherArray = map(hasKnownMother, function(e, i, a) {
  return byName[e.mother];
});
var motherDob = filter(motherArray, function(e, i, a) {
  return e.hasOwnProperty('born');
});
var motherDobList = map(motherDob, function(e, i, a) {
  return e.born;
}); 
var motherAverage = average(motherDobList);

var personDob = filter(hasKnownMother, function(e, i, a) {
  return e.hasOwnProperty('born');
});
var personDobList = map(personDob, function(e, i, a) {
  return e.born;
});

var peopleAvg = average(personDobList);

var result = peopleAvg - motherAverage;

console.log(result);// 31.22222222222217


/* #3
Historical life expectancy
When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.
Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).
*/

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function each(collection, func) {
    if(Array.isArray(collection)) {    
       for(var i = 0; i < collection.length; i++) { 
           func(collection[i], i, collection); 
       } 
    } else if(typeof collection === 'object') {  
        for(var key in collection) {
            func(collection[key], key, collection);
        }
    }
};

function filter(array, func) {
    var newArray = [];
    each(array, function (value, index, collection) {
        if (func(value, index, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

function map(collection, func) {
    var newArray = [];
    each(collection, function(value, i, group) {
        newArray.push(func(value, i, group));
    });
    return newArray;
}

function reduce(array, func, seed) {
    var arrayToIterate = array;
    var previousResult;
    var indexModifier = 0;
    if (seed !== null && seed !== undefined) { 
       previousResult = seed;
    } else {
       previousResult = array[0]; 
       arrayToIterate = array.slice(1, array.length); 
       indexModifier = 1; 
    }
    each(arrayToIterate, function(value, index, collection) {
       previousResult = func(previousResult, value, index + indexModifier); 
    });
    return previousResult; 
}

var deathListed = filter(ancestry, function(e, i, a) {
  return e.hasOwnProperty('died') && e.died !== null;
});

var centuryArray = map(deathListed, function(e, i, a) {
  return {century: Math.ceil(e.died / 100), age: (e.died - e.born)};
});

var centuryObj = reduce(centuryArray, function(previousResult, currentValue, currentIndex) {
	if(!previousResult.hasOwnProperty(currentValue.century)) {
       previousResult[currentValue.century] = [];
       previousResult[currentValue.century].push(currentValue.age);
       } else {
         previousResult[currentValue.century].push(currentValue.age);         
         }
  return previousResult;
}, {});

for(var key in centuryObj) {
  console.log(key + ': ' + average(centuryObj[key]).toFixed(1));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

/* #4
same as #3 but use groupBy function 
For bonus points, write a function groupBy that abstracts the grouping operation. It should accept as arguments an array and a function that computes the group for an element in the array and returns an object that maps group names to arrays of group members.
*/


function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function each(collection, func) {
    if(Array.isArray(collection)) {    
       for(var i = 0; i < collection.length; i++) { 
           func(collection[i], i, collection); 
       } 
    } else if(typeof collection === 'object') {  
        for(var key in collection) {
            func(collection[key], key, collection);
        }
    }
};

function filter(array, func) {
    var newArray = [];
    each(array, function (value, index, collection) {
        if (func(value, index, collection)) {
            newArray.push(value);
        }
    });
    return newArray;
}

function map(collection, func) {
    var newArray = [];
    each(collection, function(value, i, group) {
        newArray.push(func(value, i, group));
    });
    return newArray;
}

function reduce(array, func, seed) {
    var arrayToIterate = array;
    var previousResult;
    var indexModifier = 0;
    if (seed !== null && seed !== undefined) { 
       previousResult = seed;
    } else {
       previousResult = array[0]; 
       arrayToIterate = array.slice(1, array.length); 
       indexModifier = 1; 
    }
    each(arrayToIterate, function(value, index, collection) {
       previousResult = func(previousResult, value, index + indexModifier); 
    });
    return previousResult; 
}

var deathListed = filter(ancestry, function(e, i, a) {
  return e.hasOwnProperty('died') && e.died !== null;
});

var centuryArray = map(deathListed, function(e, i, a) {
  return {century: Math.ceil(e.died / 100), age: (e.died - e.born)};
});

var centuryObj = groupBy(centuryArray, function(currentValue) {
  return currentValue.century;
});

for(var key in centuryObj) {
   console.log(key + ': ' + average(pluck(centuryObj[key], 'age')).toFixed(1));
}

function groupBy (array, func) {
 return reduce(array, function(previousResult, currentValue, currentIndex) {
   var currentValFunc = func(currentValue);
   if(!previousResult.hasOwnProperty(currentValFunc)) {
       previousResult[currentValFunc] = [];
   }
   previousResult[currentValFunc].push(currentValue); 
   return previousResult;
  }, {});
};
function pluck(array, property) {
    return map(array, function(value, i, group) { 
        return value[property];                    
    });
}


// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

/* #5
Every and then some
Arrays also come with the standard methods every and some. Both take a predicate function that, when called with an array element as argument, returns true or false. Just like && returns a true value only when the expressions on both sides are true, every returns true only when the predicate returns true for all elements of the array. Similarly, some returns true as soon as the predicate returns true for any of the elements. They do not process more elements than necessary—for example, if some finds that the predicate holds for the first element of the array, it will not look at the values after that.
Write two functions, every and some, that behave like these methods, except that they take the array as their first argument rather than being a method.
*/

function every(array, func) {
    var newArray = [];
    array.forEach(function(currentValue, index, arr) {
        if (!func(currentValue, index, arr)) {
            newArray.push(currentValue);
        }
    });
    return newArray.length === 0;
}


function some(array, func) {
    var newArray = [];
    array.forEach(function (value, index, arr) {
        if (func(value, index, arr)) {
            newArray.push(value);
        } else {
          return !!value;
        }
    });
    return newArray.length > 0;
}


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false