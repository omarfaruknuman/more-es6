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
// console.log(result);

// Practice Problem
// 1
const student = {
    name: 'Fredie',
    age: 26,
}
// console.log(student.age);

// 2
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            loingitude: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
};

console.log(data.location.city);
