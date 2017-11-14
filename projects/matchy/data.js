/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {
    
};

animal.species = "dog";
animal['name'] = "Gracie";
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "bark";
noises.push("cry");
noises.unshift("yelp"); 
noises[noises.length] = "woof";
console.log(noises.length);
console.log(noises.length - 1); 
console.log(noises);
 





//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("grrr");
console.log(animal);



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    Dot and bracket notation
 
 * 2. What are the different ways of accessing elements on arrays?
 *    bracket notation by index
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = {
    species: "duck",
    name: "Howard",
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals); 

var eagle = {
    species: "eagle",
    name: "Baldy",
    noises: ["screech", "peck"]
};

var donkey = {
    species: "donkey",
    name: "Fluffy", 
    noises: ["he", "haw"]
};

animals.push(eagle, donkey);
console.log(animals);
console.log(animals.length);
 



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animalFriends = []; // used array to easily access list
var friends = animalFriends;
function getRandom (animals) {
    return Math.floor(Math.random() * animals.length);
}
var rando = getRandom(animals); 
console.log(rando); //2
friends.push(animals[rando]["name"]);
console.log(friends);
animals[0].friends = friends;
console.log(animals);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
