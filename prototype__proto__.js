function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}.`;
};

let person1 = new Person("Alice", 30);

console.log(person1.__proto__ === Person.prototype);

console.log(person1.greet());

person1.__proto__.greet = function() {
    return `Hi, I'm ${this.name} and I am ${this.age} years old.`;
};

console.log(person1.greet());

console.log(Person.prototype);

let person2 = new Person("Bob", 25);

console.log(person2.greet());
