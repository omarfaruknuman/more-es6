// syntactic sugar
class Instructor{
    name;
    designation = 'Web Course Insructor'
    team = 'Web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the session a ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}

const aamir = new Instructor('Amin','mumbai')
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.createQuiz(60);
const solaiman = new Instructor('Sulaiman', 'Dhaka');
console.log(solaiman);