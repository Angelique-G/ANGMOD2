/**
 * Created by Angelique on 6/18/2014.
 */

// could also do console.log(add(1,2,add(3,4)));
/*
console.log(add(1,2,3,4));

function add() {
    var sum = 0;
    for(var i=0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
*/

console.log(add(1,2,3,4));


var callback = function(val,idx){
    console.log(idx, val);
};

[1,2,3,4].forEach(callback);



function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
