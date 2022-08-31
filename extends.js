class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback`)
    }
}
class Instructor extends TeamMember{
    designation = 'Web Course Insructor'
    team = 'Web team'
    constructor(name, location){
        super(name, location)
    }
    startSupportSession(time){
        console.log(`start the session a ${time}`)
    }
    createQuiz(module){
        console.log(`Please create quiz for module ${module}`)
    }
    
}
class Developer extends TeamMember{
    designation = 'Web Developer'
    team = 'Web team'
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)
    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
}
class JobPlacement extends TeamMember{
    designation = 'Job Placement Commandos'
    team = 'Placment team'
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    provideResume(feature){
        console.log(`Please develop the feature ${feature}`)
    }
    prepareStudent(version){
        console.log(`Please release the version ${version}`)
    }
}

const atik = new Developer('Atikul Islam','Ctg','React');
console.log(atik);
atik.provideFeedback();

const amit = new JobPlacement('Amit ', 'Dhaka', 'Asia');
console.log(amit);
amit.provideFeedback();