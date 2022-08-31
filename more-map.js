const numbers = [12, 22, 23, 34];
const half = numbers.map(n => n / 2);
const third = numbers.map(n => n / 3);
// console.log(half);
// console.log(third);

const friends = ['Abid', 'Babid', 'Cabil', 'Dabil'];
const firstLetter = friends.map(friend => friend[0]);
// console.log(firstLetter);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);



// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
const prices = products.map(product => product.price);
// console.log(items);
console.log(prices);