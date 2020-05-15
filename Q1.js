//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].


//Original Array:
let original = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
//Sorted Array:
let sorted = original.sort((a, b) => a-b)
// console.log(sorted)
//[1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]

//Variable that will store the Final Array:
let final = [];

//Variable that will store the duplicate numbers:
let duplicates = [];


sorted.forEach(function(number, index){ //Loop through each number
  if (number === sorted[index + 1]) { //if number in the array equals the next number in the array.
     duplicates.push(number); //then, push the number into the duplicates array.

   } else if (number === sorted[index -1]) { //if the number in the array equals the previous number in the array.
     duplicates.push(number); //push the number into the duplicates array.
     final.push(duplicates); //and push the duplicates array into the final array.
     duplicates = []; //[] shorthand for new Array() -> The Array() constructor is used to create Array objects.

   } else {
     final.push(number); //if the number isn't equal to its successor or predecessor, then push it to the final array.
   }})

console.log(final);
//[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]