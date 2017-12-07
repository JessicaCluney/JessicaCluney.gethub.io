// Document Object Model: eqjs chp 13
// often used to maintain sorted sets of data because elements can usually be found or inserted more efficiently in a sorted tree than in a sorted flat array

// In the DOM, all HTML elements are defined as objects.
//      global variable document gives us access to these objects. 
//      documentElement property refers to the object representing the <html> tag
//      also provides the properties head and body, which hold the objects for those elements.

// You can imagine an HTML document as a nested set of boxes. Tags such as <body> and </body> enclose other tags, which in turn contain other tags or text. 

// Each node may refer to other nodes, children, which in turn may have their own children
// Application nodes always have children, whereas variables and values are leaves, or nodes without children.
// Each DOM node object has a nodeType property, which contains a numeric code that identifies the type of node
// All element nodes have a getElementsByTagName method, which collects all elements with the given tag name that are descendants (direct or indirect children) of the given node and returns them as an array-like object.
// To find a specific single node, you can give it an id attribute and use document.getElementById instead.

// A third, similar method is getElementsByClassName, which, like getElementsByTagName, searches through the contents of an element node and retrieves all elements that have the given string in their class attribute.

//The removeChild method removes the given child node from the document. To add a child, we can use appendChild, which puts it at the end of the list of children, or insertBefore, which inserts the node given as the first argument before the node given as the second argument.
/* Given a string, createTextNode gives us a type 3 DOM node (a text node), which we can insert into the document to make it show up on the screen.

The loop that goes over the images starts at the end of the list of nodes. This is necessary because the node list returned by a method like getElementsByTagName (or a property like childNodes) is live. That is, it is updated as the document changes. If we started from the front, removing the first image would cause the list to lose its first element so that the second time the loop repeats, where i is 1, it would stop because the length of the collection is now also 1.

If you want a solid collection of nodes, as opposed to a live one, you can convert the collection to a real array by calling the array slice method on it.

var arrayish = {0: "one", 1: "two", length: 2};
var real = Array.prototype.slice.call(arrayish, 0);
real.forEach(function(elt) { console.log(elt); });
// → one
//   two
*/

// To find the tag name of an element, use its tagName property. But note that this will return the tag name in all uppercase. Use the toLowerCase or toUpperCase string method to compensate for this.


/*When dealing with a nested data structure like this one, recursive functions are often useful. The following recursive function scans a document for text nodes containing a given string and returns true when it has found one:
*/

function talksAbout(node, string) {
  if (node.nodeType == document.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string))
        return true;
    }
    return false;
  } else if (node.nodeType == document.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

console.log(talksAbout(document.body, "book")); // → true


//The nodeValue property of a text node refers to the string of text that it represents.