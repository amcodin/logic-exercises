//Question 1 - Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

//Original Array:
let original = [1,"2",4,591,"392",391,2,"5",10,2,1,"1",1,"20",20];
//Sorted Array:
let sorted = original.sort((a, b) => a-b)
// console.log(sorted)
//[ 1, 1, '1',  1, '2', 2, 2, 4, '5', 10, '20', 20,391, '392', 591 ]

//Variable that will store the Final Array:
let final = [];

//Variable that will store the strings:
let strings = [];

//Variable that will store the numbers:
let numbers = [];

function newArray(arr) {
arr.forEach(function(item){ //Loop through each item
  if (typeof item === "string") {
     strings.push(item);
    

   } else if (typeof item === "number") {
     numbers.push(item);
      } 
   })

final.push(strings, numbers)
return final;

}

// console.log(strings);
// console.log(numbers);
// console.log(final);
newArray(original);
//[ [ '1', '2', '5', '20', '392' ], [ 1,  1,  1,   2,   2, 4, 10, 20, 391, 591 ] ]
