// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-jessicacluney');

console.log(_);

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 * 
 * 4. To test your work, run the following command in your terminal:
 * 
 *    npm start --prefix ./projects/let-s-get-functional
 */
//**maleCount**//
var maleCount = function(customers) {
    var arr = _.filter(customers, function(customer, index, collection) {//return elements when true
        if(customer.gender === 'male') {
           return true;
        }
    }); 
    return arr.length; //count of males in array
};

//**femaleCount**//
var femaleCount = function(customers) {
    return _.reduce(customers, function(previousResult, customer, index) {//reduce array to single value
        if(customer.gender === 'female') {
            return previousResult + 1; //count starts at 0; add 1 for each female
        } else {
            return previousResult; //0
        }
    }, 0); //seed (previousResult) equals zero //start count at 0 as we add
};

//**oldestCustomer**//
var oldestCustomer = function(customers) {
    var customer = _.reduce(customers, function(previousResult, customer, index) {
        if(customer.age > previousResult.age) { //reducing array by each value less than the one before
            return customer; //returning customer who's age value is higher
        } else {
            return previousResult;// if current age value was not higher than previous, return previous
        }
    });//no seed //start comparison with first age value
    return customer.name;//returing customer who's age value was greater than all else
};


//**youngestCustomer**//
var youngestCustomer = function(customers){
   var customer = _.reduce(customers, function(previousResult, customer, index) { 
        if(customer.age < previousResult.age) {//reducing array by each value greater than the one before
            return customer;//returning customer who's age value is lower
        } else {
            return previousResult;// if current age value was not lower than previous, return previous
        }
    });
    return customer.name; //returing customer who's age value was less than all else
};


//**averageBalance**//
var averageBalance = function(array){
    var totalMoney = _.reduce(array, function(previousSum, currentValue, currentIndex){
             var removeSymbols = currentValue.balance.replace('$', ''); //removeSymbols ($) so numbers can be evaluated
             removeSymbols = removeSymbols.replace(',', '');//removeSymbols (,) also needs to be removed
             var numberWithoutSymbols = Number(removeSymbols);//turn value back into a number without symbols
             return previousSum + numberWithoutSymbols;//return balance value plus each balance value
    }, 0);//seed at 0 to start count of balances
    return totalMoney / array.length; //total of blances divided by number of balances counted gives average
};

//**firstLetterCount**//
var firstLetterCount = function(array, letter) {
    var filteredArray = _.filter(array, function(value, index, collection) {
        if(letter.toLowerCase() === value.name[0].toLowerCase()) {//given letter = to first letter of name value
            return true;
        }
    });
    return filteredArray.length;//number of how many elements returned true in filter
};

//Find how many friends of a given customer have names that start with a given letter
//**friendFirstLetterCount**//
var friendFirstLetterCount = function(array, customer, letter) {
    var customerWorkingWith = _.filter(array, function(value, index, collection) {
        if(customer === value.name) { //return elements where customer = name value
            return true;
        } 
    });
    var filteredArray = _.filter(customerWorkingWith[0].friends, function(value, index, collection) {
        if(letter.toLowerCase() === value.name[0].toLowerCase()) {//return elemts where letter = first letter of name value
            return true;
        }
    });
    return filteredArray.length;//return number of friends of a given customer that have names that start with a given letter
};

//Find the customers' names that have a friendsName in their friends list
//**friendsCount**//
var friendsCount = function(array, friendsName) {
    var listOfCustomerObjects = _.filter(array, function(value, index, collection) {
      var friendsList = _.pluck(value.friends, 'name'); //return property values for friends in new array
       return _.contains(friendsList, friendsName);//return boolean of whether or not friendsName is present in an array
    });
    return _.pluck(listOfCustomerObjects, 'name'); //pull individual names from customer objects
};

//Find the three most common tags among all customers' associated tags
//**topThreeTags**//
var topThreeTags = function(array) {
    var customerTagValuesArray = _.map(array, function(value) {
        return value.tags;
    });  //return array of customer tag values 
    customerTagValuesArray = _.reduce(customerTagValuesArray, function(previousResult, element, index) {
         return previousResult.concat(element);
    }, []);

    var counters = [];
    var highestTagList = [];
    
    
    _.each(customerTagValuesArray, function(tag, index, collection) {//each applies function to customerTagValuesArray values
        var tagCounter = _.filter(counters, function(value, index, collection) {//returns array of truthy values
            return value.tag === tag; // tag is value from each filter 
        });
        if (tagCounter.length > 0) {
            // A tag counter exists, so increment it
            tagCounter[0].count++;
        } else {
            // A tag counter does not exist, add a new one
            counters.push({ tag: tag, count: 1 });
        }
    });

    function findHighestTag(counters) {
        var highestIndex = 0;
        // Find the highest tag
        var highest = _.reduce(counters, function(highestTag, tagCounter, index) {//highest tag is previous result (accumukator)
            if (tagCounter.count > highestTag.count) {//tag counter is object //count is property of tagcounter
                highestIndex = index; //storing highest index so we know which one to remove from array later
                return tagCounter;//current value //return if true bc this number would be higher than previous
            } else {
                return highestTag;//return previous result if current value is less than previous
            }          //don't need to change index here because highesttag doesn't change (value and index remain unchanged)
        });
        counters.splice(highestIndex, 1);//counters:array storing values//remove highest index
        return highest;//return function result //result = object with tag and count properties
    }
    
    //findHighestTag(counters) is run below//higher value item removed each time to allow for next highest value to return 
    // Highest
    var highest = findHighestTag(counters);//run function on counters array
    highestTagList.push(highest.tag);// push highest value into empty array 
    
    // Second highest
    highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    // Third highest
    highest = findHighestTag(counters);
    highestTagList.push(highest.tag);
    
    return highestTagList;
};


//**genderCount**//Create a summary of genders, the output should be:
//```javascript
//{
//     male: 3,
//     female: 4,
//     transgender: 1
// }
//return object
var transgenderCount = function(customers) {
    return _.reduce(customers, function(previousResult, customer, index) {//reduce array to single value
        if(customer.gender === 'transgender') {
            return previousResult + 1; //count starts at 0; add 1 for each female
        } else {
            return previousResult; //0
        }
    }, 0); //seed (previousResult) equals zero //start count at 0 as we add
};
var genderCount = function(array){
    var genderCountObject = {
    'male': maleCount(customers),
    'female': femaleCount(customers), 
    'transgender': transgenderCount(customers)
    };
     return genderCountObject;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
