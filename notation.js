const student ={
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    }
}

const mark = student.marks; 
const math = student.marks.math;

const chemistry = student['marks']['math'];
const age = student.age;
const ages = student.class;
console.log(chemistry);
console.log(age);
console.log(ages);
