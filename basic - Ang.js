/**
 * Created by Angelique on 6/17/2014.
 */

// Example 1
console.log("Hi");


// Example 2
var hi = "Hello!"

console.log (hi)



// Example 3
v("Hi!")
function v(val){
    console.log(val)

}


// Example 4
//     var str = "test";




// Example 5


var me = {
    name : "Angelique"
};

console.log(me.name)



// Example 6
for (i = 0; i < 5; i++){
    console.log(me.name)
}



var types = {
    string: "a string",
    number: 42,
    boolean: true,
    array: [1,2,3,4],
};

var key;

for(key in types) {
    console.log(key, types[key])
}

var i;
console.log('iterating array')
for(i=0; i< types.array.length; i++){
    console.log(i, types.array[i])
}








