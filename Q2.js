//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]


let array = [0,1,2,3,4,5,6,7,8,9,10,11,12];
let target = 12;

let answer = [];
let matchingSet = [];

function adding(array, target) {
    for (let i=0; i < array.length; i++) {
        for (let j=i+1; j < array.length; j++) {
            if (array[i] + array[j] === target) {           matchingSet.push(array[i],array[j]);
                answer.push(matchingSet);
                matchingSet = [];
            };
        };
    };
    console.log(answer);
}; 

adding(array, target);