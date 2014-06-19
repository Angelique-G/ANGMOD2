/**
 * Created by Angelique on 6/18/2014.
 */

var arr = [1,2,3,4];

var sum = 0;
arr.forEach(function(val){
    sum += val;
});

console.log(sum);

for(var i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
}

var callback = function(val, idx) {
    console.log(idx, val);
}

arr.forEach(callback);

forEach(arr, callback);

function forEach(arr, fn) {
    for(var i =0; i < arr.length; i++) {
        fn(arr[i], i);
    }
    return sum;
}







