const capitalizeFirst = words => {
  return words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
};// first letters to uppercase


var str = "ploopy";
function FirstReverse(str) {   
 return str.split("").reverse().join("");
};
console.log(FirstReverse(str));//return string in reverse


function reverseString (string) {
    newString = string.split('')
    revString = newString.reverse();
    return revString.join("");
    
}
console.log(reverseString("hello"));//string in reverse


var arr = [1, 2, 3, 4];
var stringy = '# ';
var stringy2 = ' #';
for(var i = 0; i < arr.length; i++) {
  if(i % 2 === 0){
  console.log(stringy.repeat(arr.length));
  }
  else {
    console.log(stringy2.repeat(arr.length));//4 x 4 rows of # evry other line indented
  }
};

var arr = [1, 2, 3, 4, 5, 6, 7];
var stringyy = '#';
for(var i = 0; i < arr.length; i++) {
  console.log(stringyy.repeat(arr[i]));
};// pyramid of #



var arr = ["kleenex", "album", "food", "lemons", "apples"];
function findAWords (arr) {
  var aWords= [];
  for(var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
    if (arr[i][0].toLowerCase() === "a") {
       aWords.push(arr[i]);
    }
  }
  return aWords;
}
 console.log(findAWords(arr));//["album", "apples"]


 
 //find longest word
var pizzaTop = ["sausage", "onion", "pepperoni", "mushroom"];
function wordLength(toppings){
  for (var i = 0; i < toppings.length; i++){
    console.log(toppings[i].length);//7 5 9 8
  }
  var longestWord = toppings[0];
  for (i = 1; i < toppings.length; i++){
    if (toppings[i].length > longestWord.length){
      longestWord = toppings[i];
    }
  }
  return longestWord;
}
console.log(wordLength(pizzaTop)); //"pepperoni"

