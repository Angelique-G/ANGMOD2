/**
 * Created by Angelique on 6/18/2014.
 */
s = 3;
t = 5;

var obj = {
    s: 7,
    t: 11
}
console.log(obj);
console.log(add( obj ));
console.log(add.call( obj ));

//*Do I need to add a function here or something here to define add?


function add() {
    return this.s + this.t;
}