var gamePattern=[];
var buttonColors=["red","blue","green","yellow"]

function nextSequence(){
    randomNumber=Math.floor(Math.random()*4);
    return randomNumber;
}

var randomChosenColor=buttonColors[nextSequence()];
console.log(randomChosenColor);
gamePattern.push(randomChosenColor);

console.log(gamePattern);