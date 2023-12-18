var RandomNumber1 = Math.floor(Math.random()*6)+1;
var RandomDice = "dice" + RandomNumber1 + ".png";
var RandomImage = "images/" + RandomDice;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",RandomImage);

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var RandomDice = "dice" + RandomNumber2 + ".png";
var RandomImage = "images/" + RandomDice;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomImage);

if(RandomNumber1>RandomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER1 WINS"
}
else if(RandomNumber1<RandomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER2 WINS"
}
else {
    document.querySelector("h1").innerHTML = "MATCH DRAW !!!"
}
