interface ITeacher {
    say(): void;
}

class Teacher {
    name: string;

    constructor(name){
        this.name = name;
    }
    say(){
        console.log(`Hello, I'm ${this.name}` );
    }
}

const teacher = new Teacher("Tom");
teacher.say();