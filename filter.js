const numbers = [12, 13, 15, 17, 18, 23, 35, 36, 86, 97];
const bigNums = numbers.filter(number => number > 20);
// console.log(bigNums);
const tiny = numbers.filter(number => number < 20);
// console.log(tiny);
const even = numbers.filter(number => number % 2 === 0);
// console.log(even);

const products = [{
    id: 1,
    name: 'laptop',
    price: 4598900
},
{
    id: 2,
    name: 'Mobile',
    price: 2393640
},
{
    id: 3,
    name: 'Watch',
    price: 8450
},
{
    id: 4,
    name: 'tablet',
    price: 7588800
},
];

const expensive = products.filter(product => product.price < 10000);
console.log(expensive);