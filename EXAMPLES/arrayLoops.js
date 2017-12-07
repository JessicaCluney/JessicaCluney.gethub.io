var favoriteColors = [{
	name: 'Yancy',
	color: 'blue'
}, {
	name: 'Jessica',
	color: 'pink'
}, {
	name: 'Gracie',
	color: 'grey'
}, {
	name: 'Poop Emoji',
	color: 'brown'
}];

function findColor(name){
  for (var i = 0; i < favoriteColors.length; i++){ 
     if (favoriteColors[i].name === name){
       return favoriteColors[i].color;
     } 
  }
  return "Not a Choice"
}

console.log(findColor('Gracie'));//grey


//find theoldest person
var people = [{
	name: 'Yancy',
	age: 32
}, {
	name: 'Jessica',
	age: 32
}, {
	name: 'Gracie',
	age: 8
}, {
	name: 'Poop Emoji',
	age: 45
}, {
	name: 'Oreo',
	age: 2
}];

function findTheOldGuy(){
  var oldestPerson = people[0];
  
  for (var i = 1; i < people.length; i++){  
    if (people[i].age > oldestPerson.age){
       oldestPerson = people[i];
     } 
  }
  return oldestPerson.name;
}

console.log(findTheOldGuy());


var myStuff= ["shoes", "purse", "jeans"];
for(var i = 0; i < myStuff.length; i++){
  console.log(myStuff[i]);
}
//"shoes" "purse" "jeans"*/
for (var i= 10; i > 0; i--){
  console.log(i);
}
// outputs 10-1

for (var i =1; i <11; i++){
  console.log(i);
}
//outputs 1-10


var myStuff= ["shoes", "purse", "jeans"];
for(var i = myStuff.length-1; i >= 0; i--){
  console.log(myStuff[i]);
}//"jeans" "purse" "shoes"