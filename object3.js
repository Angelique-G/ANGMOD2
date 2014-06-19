/**
 * Created by Angelique on 6/18/2014.
 */


var field = {
  top: 0
, left: 0
, width: 100
, height: 100 };

var ball = {x: 50, y: 50}

var result = isBallInBouds(ball);
console.log(result);

function isBallInBouds(ball) {
    if(ball.x < field.left) return false;
    if(ball.x > field.left + field.width) return false;
    if(ball.y < field.top) return false;
    if(ball.y > field.top + field.height) return false;
    return true;
}


var field = {
    top: 0
    , left: 0
    , width: 100
    , height: 100 };

var ball2 = {x: 150, y: 50, ob: {}};

var result = isBallInBounds(ball2);
console.log(result, ball2.ob)

function isBallInBounds(ball2) {
    ball2.ob = {};
    if(ball2.x < field.left) ball2.ob.left = true;
    if(ball2.x > field.left + field.width) ball2.ob.right = true;
    if(ball2.y < field.top) ball2.ob.top = true;
    if(ball2.y > field.top + field.height) ball2.ob.bottom = true;

    var isOut = false;
    for(var side in ball2.ob) {
        if(ball2.ob[side]) isOut = true;
    }


    return !isOut;
}







