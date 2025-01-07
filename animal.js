class Animal {
    speak() {
        console.log("Generic animal sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

let animal = new Animal();
let dog = new Dog();

animal.speak();
dog.speak();
