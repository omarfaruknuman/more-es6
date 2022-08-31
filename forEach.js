const friends = ['Abid', 'Babid', 'Cabil', 'Dabil'];

friends.forEach(friend => console.log(friend));

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
        price: 5698450
    },
    {
        id: 4,
        name: 'tablet',
        price: 7588800
    },
];

products.forEach(product => console.log(product.id));
products.forEach(product => console.log(product.name));
products.forEach(product => console.log(product.price));