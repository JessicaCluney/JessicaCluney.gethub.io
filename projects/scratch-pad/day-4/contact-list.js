// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      2. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      3. length(): returns the number of contacts within the list.
 *      4. find(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 * 
 * BONUS : add a all() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The all() Function should 
 *         return a String formated with all the full-names of the separated contacts 
 *         with a line-break, like so:
 *          
 *         myContacts.add(); // => Max Gaudin
 *                                 John Fraboni
 *                                 Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 * 
 * RUNNING YOUR CODE:
 * 
 * You can run the individual test by entering the following command:
 * 
 *   mocha -R spec -g "#contact-list"
 */
 
// var contacts = require('./data/contact.json');

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
} 
    // var jessicaCluney = makeContact(1, "Jessica", "Cluney");
    // console.log(jessicaCluney);
    
function makeContactList() {
    var list = [];
    return {
        addContact: function(contact) {
            list.push(contact);
        },
        find: function(fullName) {
            for ( var i = 0; i < list.length; i++) {
              if (fullName === (list[i].nameFirst + " " + list[i].nameLast)) {
                return list[i];
              }
            }
        },
        removeContact: function(contact) {
            for (var c = 0; c < list.length; c++) { 
                 if (list[c] === contact) {
                 list.splice(c, 1);
                 }
            }
        },
        length: function() {
            return list.length;
        },
        all: function() {
            var newString = "";
            for (var j = 0; j < list.length-1; j++) {
                 newString += list[j].nameFirst + " " + list[j].nameLast + "\n";
            } 
            if (list.length > 0) {
              newString += list[list.length-1].nameFirst + " " + list[list.length-1].nameLast; 
            }
        
            return newString;
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}