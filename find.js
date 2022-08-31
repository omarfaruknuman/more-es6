const numbers = [12, 13, 15, 17, 18, 23, 35, 36, 85, 97];
const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fives);
console.log(fivesAll);

const products = [{
    id: 1,
    name: 'laptop',
    price: 40000
},
{
    id: 2,
    name: 'Mobile',
    price: 23000
},
{
    id: 3,
    name: 'Watch',
    price: 5000
},
{
    id: 4,
    name: 'tablet',
    price: 75000
},
];
const midPrice = products.filter(product => product.price < 25000);
const midPrice1 = products.find(product => product.price < 25000);
console.log(midPrice);
console.log(midPrice1);