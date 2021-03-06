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

//Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.

function shiftToLeft(x, y) {
return (x * Math.pow(y, y));

}
console.log(shiftToLeft((10, 3)))

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
// function addUp(num) {
//
// }

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
return ((side1 + side2) - 1);
}
console.log(nextEdge(4, 5));

// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a) {
return "Something " + a;
}
console.log(giveMeSomething("is better than nothing right?"));

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
if ((a + b) >= 100){
    return false

    } else{
    return true
};
}
console.log(lessThan100(99, 0));

// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//
//     Consider a && b:
//
// a is checked if it is true or false.
//     If a is false, false is returned.
//     b is checked if it is true or false.
//     If b is false, false is returned.
//     Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
//
//     Make a function using the && operator.

function and(a, b) {

}

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//
//     wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(wins, draws, losses) {

}

// Fix the code in the Code tab so the function returns true if and only if x is equal to 7.

function isSeven(x) {
    if (x !== 7) {
        return false
    }   else{
                return true;
            }
        }

console.log(isSeven(4));


// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function sumPolygon(n) {
    if (n < 2){
        return "Input must be greater that 2"
    } else {
       return ((n - 2) * 180);
    }

}
console.log(sumPolygon(10));

// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
    if(num > 0){
        return false;
    } else{
        return true;
    }
}
console.log(lessThanOrEqualToZero(2));

// function minMax(arr) {
//
// }

//A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
//
// Create a function which calculates the amount of fuel it needs, given the distance.

function calculateFuel(n) {
    if (n * 10 < 100) {
        return 100;
    } else {
        return (n * 2);
    }
}

console.log(calculateFuel(50));

//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2) {
 if (str1.length !== str2.length) {
     return false;
 } else{
     return true;
 }
}

console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));

//Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
    return arr.slice(-1);

}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.
//
// Write a function that determines if the year is a leap year or not.
//
// function leapYear(year) {
// if (year )
// }

// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument.
//     Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    var total = 0;
    for(var i = 1; i <= num; i++){
        total += i;
    }
    return total;
}
console.log(addUp(6))


// This challenge will help you interpret mathematical relationships both algebraically and geometrically.
//     https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
//     Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step) {
    if (step === 0){
        return 0
    } else {
        return ((step * 6) - (step -1));
    }
}

console.log(matchHouses(0))


// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    return [Math.min(arr), Math.max(arr)];
}
 var arr = [50, 60, 20, 10, 40]
   console.log(minMax(arr))


console.log("Testing Github push")

// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

// const drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
// ]
// function sortDrinkByPrice(drinks) {
// return drinks.sort((a,b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.price > b.size) ? 1 : -1) : -1);
// }
// console.log(sortDrinkByPrice())

//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
return (a + b) <= 100;
}
console.log(lessThan100(99, 4))


//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.


function animals(chickens, cows, pigs) {
return ((chickens * 2) + (cows * 4) + (pigs * 4));
}
console.log(animals(5, 2, 8))

// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise.
// Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
//****How does instanceof work?
function timeForMilkAndCookies(date) {
    return date instanceof Date && date.getMonth() === 11 && date.getDate() === 24;

}

console.log(timeForMilkAndCookies(new Date(2025, 11, 24)))


// Create a function to return the amount of potatoes there are in a string.

function potatoes(str) {
    return str.match(/potato/g).length
}

// *****Example solutions*****

// console.log(potatoes("potato"))
//
// console.log(potatoes("potatopotatopotatopotatopotatopotato"))

// console.log(potatoes("potatoapple"))

// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
    let arr = Array.from(str);
    let newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i].repeat(2))
    }
    console.log(newArr.join(""))
}
doubleChar("Solid Snake")

// doubleChar("String") ??? "SSttrriinngg"
//
// doubleChar("Hello World!") ??? "HHeelllloo  WWoorrlldd!!"
//
// doubleChar("1234!_ ") ??? "11223344!!__  "



// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

function bomb(str) {
if (str.indexOf('bomb') > -1){
    return "Duck";
}   else return "There is no bomb, relax.";
}
console.log(bomb("This food is the bomb."))
console.log(bomb("This is patrick."))

// bomb("There is a bomb.") ??? "Duck!!!"
//
// bomb("Hey, did you think there is a bomb?") ??? "Duck!!!"
//
// bomb("This goes boom!!!") ??? "There is no bomb, relax."

//Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
const nums = [1, 2, 3, 4, 5, 6, 7, 8]
function getOnlyEvens(nums) {
   const even = nums.filter(number => {
       return number % 2 === 0;
   });
   console.log(getOnlyEvens);
}

//Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
}

    console.log(countVowels("Apple and or Orange"))
// countVowels("Celebration") ??? 5
//
// countVowels("Palm") ??? 1
//
// countVowels("Prediction") ??? 4

//Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
function sayHelloBye(name, num) {
    if (num === 1){
        return ("Hello" + " " + name)
    } else if (num === 0){
        return ("Bye" + " " + name)
    } else return("Please input a 1, or 0")
}

console.log(sayHelloBye("Javier", 3))
// sayHelloBye("alon", 1) ??? "Hello Alon"
//
// sayHelloBye("Tomi", 0) ??? "Bye Tomi"
//
// sayHelloBye("jose", 0) ??? "Bye Jose"


/*
Create a function that takes a string and returns a new string with all vowels removed.
removeVowels("I have never seen a thin person drinking Diet Coke.")
??? " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
??? "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
??? "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
*/

function removeVowels(str) {
return str.replace(/[aeiou]/ig,'')
}

console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))

