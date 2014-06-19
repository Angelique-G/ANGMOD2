/**
 * Created by Angelique on 6/18/2014.
 */

var array = [1,2,3];

var arr = array_string

var array_string = "1,2,3";
console.log(array_string.split (","));

var items = [];
array.forEach(function(item, idx){
    items[idx]=parseFloat(item);
});

console.log("items, ", items);
