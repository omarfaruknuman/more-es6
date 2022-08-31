// 1. var let const 
// break up with var
const numbers = [12, 32, 43, 45];
let salary = 248;
salary = 480;

// 2. default parameters
function calculateSalary(salary, tax = 0.25, bouns = 0) {
    const reamining = salary - salary * tax;
    const total = reamining + bouns;
    return total;
}

// 3. template string
const elementHTML = `
<div>
    <h3>Name: </d3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)} </p>
    <p>Others: ${numbers[2]}</p>
</div>
`

// 4. Arrow function 
doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bouns) => salary - salary * tax + bouns;

// 5. spread 
const ages = [11, 15, 14, 10, 16];
const newAges = [...ages, 22, 34, 556];

// destructuring
const {
    x,
    y,
    z,
    ...c
} = {
    x: 45,
    y: 12,
    z: 33,
    name: 'sakib Al hasan',
    salary: 450000
}
const [a, b, ...r] = [12, 25, 24, 56];