class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const p = new Person("Tom", 20);

p.sayHi();