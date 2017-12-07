var obj = {
    one: 'a',
    two: 'b',
    three: 'c'
};
console.log(obj); //logs object

for(var key in obj) {
    console.log(key);//logs keys
}
for(var key in obj){
  console.log(obj[key]);//logs values
}

//write mapObject function
//use it on input:
/*
{
    firstName: "James",
    lastName: "Hu",
    gender: "Male",
    biography: "Oh hey, I'm just a guy"
}
*/

//write format function to be passed into mapObject
//produce output
/*
{
    firstName: "JAMES",
    lastName: "HU",
    gender: "MALE",
    biography: "oh hey, i'm just a guy"
}
*/

var mapObjectReduce = function(object, callback){
  return Object.keys(object) //returns keys in an array
  	.reduce(function(previousValue, key) { //reduce over array
      var obj = {};
      obj[key] = callback(key, object[key]); //create new obj keys using callback function, key, and values
     	return Object.assign(previousValue, obj);//Object.assign: copies source object into target object
  	}, {});
};

var format = function(key, value) {
  if (key === 'biography') {
    return value.toLowerCase();
  } else {
    return value.toUpperCase();
  }
};