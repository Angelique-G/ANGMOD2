/**
 * Created by Angelique on 6/18/2014.
 */


var array = [1,2,3];

var array_string = "1,2,3";
console.log(array_string.split (","));



/*
var items = [];
arr.forEach(funtion(item, idx){
        items(idx)=parseFloat(item);
    });

console.log("items, ", items);

*/

var array_string2 = "4,5,6";
var arr = array_string2
    .split(",")
    .map(function(str) {
        return parseFloat(str);
    });



console.log(arr);

console.log(array);

console.log(array.toString());

console.log(array.join(", "));

console.log(join(array, "--"));


function join(arr, str) {
    var output = "";
    arr.forEach(function(item, idx) {
        output += item;
        if(idx < arr.length-1) output += str;
    });
    return output;

}

