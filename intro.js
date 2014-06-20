/**
 * Created by Angelique on 6/19/2014.
 */

//define variables
var names = ['Bob','Sally','John','Betty'];
var message = "Hello, ";

console.log(message + names[5] + "!");


names.forEach(function(theName)  {
    console.log(theName);
});


//function forEach(arr,cb){
//for)(var i=0; i < arr.length; i++
//cb(arr[i], i);


//look up array, hash, function, method, etc

//add Jane
names.push('Jane');

console.log(names);

/*Jane didn't play well with other -- sent home.  (this actually will only
 delete the last entry on list
*/
names.pop();

console.log(names);

names = []

console.log(names);


obj={
    name:"bob"
};

//if(!obj.name)obj.name = " ";

var playground = {
    name: "Walt Disney World",
    location: "Orlando",
    rides: ["Magic Mountain", "Big Thunder Mountain"],
    cost: "You don't want to know!!!"
};
console.log(playground.name)
console.log(playground.location)
console.log("RIDES:  " + playground.rides[0] + ", " + playground.rides[1])

console.log("How much is it?  " + playground.cost);

playground.cost = "WOW!"

console.log(playground.cost);

//CONCATENATE

//TUTSHOUSE

//JAVASCRIPT THE DEFINITIVE GUIDE

//DOM




