//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  var arr = [];
  for (var key in object) {
      arr.push(object[key]);
  }
  return arr;
} 
// Should take an object and return its values in an array (1, 0, 1)

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(obj) {
 
 return Object.keys(obj).join(" ");
    
//  var keys = Object.keys(obj);
//  var keyString = "";
 
//  for (var i = 0; i < keys.length; i++) {
//      if (i === 0) {
//          keyString.concat(keys[i]);
//      } else {
//          keyString.concat(" ", keys[i]);
//  }
//   return keyString;
// }
}
//Should take an object and return all its keys in a string each separated with a space (1, 0, 1)

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
 var stringArray= [];
 for(var key in object) {
  if(typeof object[key] === 'string') {
   stringArray.push(object[key]);
  }
 }
  return stringArray.join(' ');
}
// var stringValues = Object.values(object); 
  
//   for (var i = 0; i < stringValues.length; i++) {
//     if (typeof stringValues[i] !== 'string') {
//       stringValues.splice(i, 1);
//     }
//   }
//   return stringValues.join(' ');
// Should take an object and return all its string values in a string each separated with a space (1, 0, 1)

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
     return 'array';
    } else if (collection === null) {
     return false;
    } else if (collection instanceof Date) {
     return false;
    } else if (typeof collection === 'object') {
     return 'object';
     } else {
      return false;
     }
    }

//Should take one argument and return 'array' if its an array and 'object' if its an object (2, 0, 2)

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string.replace(string[0], string[0].toUpperCase());
}

//capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized (3, 0, 3)

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var split = string.split(" ");
    for (var i = 0; i < split.length; i++) {
      split[i] = capitalizeWord(split[i]);
    }
    return split.join(" ");
}
//THIS IS WHAT ITS DOING
//This Is What They Want

//capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized (2, 0, 2)

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
 return "Welcome" + " " + capitalizeWord(object.name) + "!"; 
}

//welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!' (2, 0, 2)

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
 return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>' (2, 0, 2)

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function maybeNoises(object) {
//    var objKeys = Object.keys(object); //['noises']
//    var objVals = Object.values(object); // [["bark", "woof", "squeak","growl"]]
  
//   for (var i = 0; i < objKeys.length; i++) {
//    if (objKeys[i] === "noises" && Array.isArray(objVals)) {
//     return objVals[i].toString().replace(/,/g, " ");
//    } 
//   }
// }

function maybeNoises(object) {
 if (object.hasOwnProperty('noises') && Array.isArray(object.noises) && object.noises.length > 0) {
   return object.noises.join(' ')
 } else {
   return 'there are no noises'
 }
}

//maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises' (3, 0, 3

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.search(word) >= 0) {
      return true;
    }
    return false;
}    


//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false. (3, 0, 3)

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object['friends'].push(name);
      return object
}


//Should take a name and an object and add the name to the object's friends array then return the object (2, 0, 2)

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
 var friendsArray = object['friends'];
 
 if(Array.isArray(friendsArray)) {
  for(var i = 0; i < friendsArray.length; i++) {
   if(name === friendsArray[i]) {
    return true;
   }
  }
 }
  return false;
}

//isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise 

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {  
  var nonFriendsList = [];
//   for(var key in data){
//  console.log(data[key].name);
  for(var i = 0; i < array.length; i++) {
    if(array[i].name !== name) {
      var isInFriendsList = false;
      console.log(array[i]);
      for(var j = 0; j < array[i].friends.length; j++){
        if(array[i].friends[j] === name){
          isInFriendsList = true;
        } 
      }
      if(!isInFriendsList) {
        nonFriendsList.push(array[i].name);
      }
    }
  }
   return nonFriendsList;
} 
 
 // var newList = [];
 // var objectNames = Object.keys(data);
 // for(var i = 0; i < objectNames.length; i++){
 //  for(var j = 0; j < array.length; i++) {
 //    if(array[i] !== objectNames[i]) {
 //     newList.push(name);
 //    }   
 //  } 
 // }  
 // return newList; 
 
// var data = [
//         {name: "Jimmy", friends:["Sara", "Liza"]},
//         {name: "Bob", friends:[]},
//         {name: "Liza", friends: ["Jimmy"]},
//         {name: "Sara", friends: ["Jimmy"]}
//       ];
 
//  var newList = [];
//  var objectKeys = Object.keys(data);
//  var objectValues = Object.values(data); 
 
//  for(var i = 0; i < array.length; i++) {
//   for(var j = 0; j < objectValues.friends.length; i++) {
//    if(array[i] !== objectKeys.name[i]) {
//     newList.push(array[i]);
//    }
//   }
//  }
//  return newList;
// }




 
 
//nonFriends() : Should take a name and a list of people, and 
//return a list of all the names that <name> is not friends with

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object;
 // var objectKeys = Object.keys(object);
 // var objectValues = Object.values(object);
 // for (var i = 0; i < objectKeys.length; i ++) {
 //  if (objectKeys[i] !== key) {
 //   objectKeys.push(key);
 //  }
 //  object.replace(objectKeys, value);
 // }

}


//updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// var objProperties = Object.keys(object);
// for(var i = 0; i < objProperties.length; i ++) {
  for(var j = 0; j < array.length; j++) {
   delete object[array[j]];
   // if (objProperties[i] === array[j]) {
   //  objProperties[i].splice(j, 1);
 //  }
  }
// }
}

//removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
 for(var i = 0; i < array.length; i++) {
  for(var j = i+1; j < array.length; j++) {
    if(array[i] === array[j]) {
     array.splice(j--,1);
    }
  }
 }
 return array;
}

//dedup() : Should take an array and return an array with all the duplicates removed


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}