var pizza = [{
  name: "Yancy",
  favPizza: "double pep",
  bestFriend: "Ica"
},{ 
  name: "Ica",
  favPizza: "art lover",
  bestFriend: "Gracie"
},{
  name: "Gracie",
  favPizza: "Yancy's pizza",
  bestFriend: "people who pet her"
}];

function favoritePizza(name, pizzaChoice) {
  for(var i = 0; i < pizzaChoice.length; i ++) {
      if(pizzaChoice[i].name === name) {
        return name + " " + "loves" + " " + pizzaChoice[i]["favPizza"] + "!";
      }
  }

}
console.log(favoritePizza("Ica", pizza));//return name loves __ pizza!


//slice
var fruits = ["apple", "orange", "lemon"];
var citrus = fruits.slice(1,3);
console.log(citrus);//["orange", "lemon"]

//capitalizeFirstMap//first letter each word in array

const capitalizeFirstMap = words => {
  return words.map(function(word) {
  return word[0].toUpperCase() + word.slice(1);
  });
};

//same as previous
const capitalizeFirstMap = words => {
   words.map(word => `${word[0].toUpperCase()}${word.slice(1)}`);