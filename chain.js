const users = [{
    id: 1,
    name: 'Abid',
    job: 'doctor'
}];

// console.log(users[0].name);

const data = {
    count: 5000,
    data: [{
        id: 1,
        name: 'Babul',
        job: 'Leader'
    }, {
        id: 2,
        name: 'Ratul',
        job: 'Leader'
    }]
}

const firstJob = data.data[0].job
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Amirul Islam',
    address: {
        street: {
            first: '23/A abc line',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cnatonment',
        city: 'Dhaka'
    }
}

const floor = user.address.street.second;
console.log(floor);