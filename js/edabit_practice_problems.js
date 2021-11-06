"use strict";

//Return the Sum of Two Numbers
function addition(a, b) {
let plus = a + b
    return plus;

}
console.log(addition(10, 2));

// Convert Minutes into Seconds

function convert(minutes) {
    return minutes * 60;

}
console.log (convert(60));

// Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
return ((base * height) / 2);
}
console.log(triArea(10, 10));

// Return the First Element in an Array
function getFirstValue(arr) {
return arr[0]
}

// Return the Remainder from Two Numbers
function remainder(x, y) {
return x % y;
}

// Return the Next Number from the Integer Passed
function addition(num) {
return num + 1;
}

// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
return voltage * current;
}

//A student learning JavaScript was trying to make a function.
// His code should concatenate a passed string name with string "Edabit" and store it in a variable called result.
// He needs your help to fix this code.

function nameString(name){
    var b = "Edabit"
    var result = name + b
    return result;
}

// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function sumPolygon(n) {
return ((n - 2) * 180);
}

//You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
function points(twoPointers, threePointers) {
return ((twoPointers * 2) + (threePointers * 3));
}