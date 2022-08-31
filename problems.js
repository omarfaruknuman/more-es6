// Prolem 1
const digits = [1, 3, 5, 7, 9];
const even = digits.map(num => num + 1 );
// console.log(even);

// Problem 2 
const numbers = [33, 50, 79, 78, 90, 101, 30];
const ten = numbers.filter(num => num % 10 === 0);
// console.log(ten);

// Problem 3
const nums = [33, 50, 79, 78, 90, 101, 30];
const result = nums.find(num => num % 10 === 0);
console.log(result);