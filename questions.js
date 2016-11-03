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
strCompare(stringOne, stringTwo);


// Write a function named revArray that will take in an array and return a reversed copy of that array.

var revArray = ['one', 'two', 'three'];
revArray.reverse();
//////////So, on the toy problem you did this as well, where you did not put this code in a function - make sure you understand why
//////////we almost always wrap functionality in functions. Here, revArray does not return anything - it reverses the array and then
//////////doesn't do anything with it.



// Repeat step 6 WITHOUT using .reverse().

function revArray(arr) {
  var i = 0;
  while (i < arr.length - 1) {
    arr.splice(i, 0, arr.pop()); //A cool solution I haven't seen before
    i++;
  }
  return arr;
}

var arr = ['one', 'two', 'three'];


// Invoke revArray, passing in the array created in step 1 as an argument
revArray(arr);

//It looks like you know how to invoke a function, maybe you just weren't sure about what it was called? 
//It's also called "calling the function" sometimes
