/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search (animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (name === animals[i].name) {
           return animals[i];
        } 
     }
     return null;
}    




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    animals.splice(search, 1, replacement)
}



//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    var indexToRemove = -1;
    for (var i = 0; i < animals.length; i++) {
        if (name === animals[i].name) {
          indexToRemove = i;
          break;
        } 
    }
    if (indexToRemove >= 0) {
        animals.splice(indexToRemove, 1);
    }
}    



//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {  //animals = array; animal = object = new animal to be added

    for (var i = 0; i < animals.length; i++) {
         if(animal.name.length > 0 && animal.species.length > 0 && animals[i].name === animal.name) {
            return false;
         }
    } 
    return animals.push(animal); 
 
}    
    



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
