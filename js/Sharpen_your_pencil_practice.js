"use strict";

//What is the value?

var temp = 81;

var willRain = true;

var humid = (temp > 80 && willRain == true);

console.log("The humidity is " + humid)

//What is the value?
var guess = 6;

var isValid = (guess >= 0 && guess <= 6);

console.log(isValid);

//What is the value?

var kB = 1287;

var tooBig = (kB > 1000);

var urgent = true;

var sendFile = (urgent == true || tooBig == false);

console.log(sendFile)


var keyPressed = "N";

var points = 142;

var level;

if (keyPressed == "Y" ||
    (points > 100 && points < 200)) {
    level = 2;
} else {
    level = 1;
}

console.log(level)