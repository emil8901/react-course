class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major = 'Undecided') {
    super(name, age); // wywolanie konstruktora rodzica
    this.major = major;
  }
  getDescription() {
    return 'testing';
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = '') {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.homeLocation) {
      description += ` I'm visiting from ${this.homeLocation}`;
    }

    return description;
  }
}

const me = new Student('Emil Iwicki', 21, 'Computer Science');
console.log(me.getDescription());

const traveler = new Traveler('Emil Iwicki', 21, 'Chojnice');
console.log(traveler.getDescription());
