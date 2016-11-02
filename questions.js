// Write an array and assign it to a variable
var myArray = [a, b, c, d, e];
// Write two strings, assigning them each to a different variable
var stringOne = 'hello';
var stringTwo = 'hi';
// Write an if statement to see if string A is longer than string B
var stringOne = 'hello';
var stringTwo = 'how are you';

if (stringOne.length > stringTwo.length) {
console.log ("String one is longer!");
} else {
console.log ("String two is longer!"); }
// Write a function called “strCompare” that will take in two parameters, both strings, and will return the word that is longer
var a = 'hello';
var b = 'hi';
function strCompare (a, b) {
  if (a.length > b.length) {
    return a;
  } else {
    return b;
  }
}
// Invoke strCompare with the strings created in step 2 given as arguments



// Write a function named revArray that will take in an array and return a reversed copy of that array.

var revArray = ['one', 'two', 'three'];
revArray.reverse();

// Repeat step 6 WITHOUT using .reverse().

function revArray(arr) {
  var i = 0;
  while (i < arr.length - 1) {
    arr.splice(i, 0, arr.pop());
    i++;
  }
  return arr;
}

var arr = ['one', 'two', 'three'];
console.log(revArray(arr));

// Invoke revArray, passing in the array created in step 1 as an argument
