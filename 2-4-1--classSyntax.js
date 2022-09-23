class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const newRect = new Rectangle(400, 800);

// console.log(newRect);

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() { // Methods created in a class will not be applied to each object made by the constructor, but will be applied to a new prototype made by the class function
       console.log(`${this.name} says 'Hello'`);
    }
};

class Dog extends Animal {
    constructor(name) {
        super(name); // grabs all of the properties from the parent Animal prototype
    }

    speak() { // this .speak method overrides the .speak method on the Animal prototype
        console.log(`${this.name} says 'Woof'`);
    }
};

class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    speak() { // this .speak method overrides the .speak method on the Animal prototype
        console.log(`${this.name} says 'Meow'`);
    }
}

const jamison = new Animal('Jamison');
// console.log(jamison);
// jamison.speak();

const bowWow = new Dog('Lucy');
// console.log(bowWow);
// bowWow.speak();

const giGi = new Cat('Gigi');
// console.log(giGi);
// giGi.speak();

// 2.4.1 challenge

class Grandpa {
    constructor(data) {
        this.name = data.name;
        this.birthPlace = data.birthPlace;
        this.eyeColor = data.eyeColor;
        this.hairColor = data.hairColor;
    }

    speak() {
        console.log(`${this.name} greets you from the other side. Spooky, right?`);
    };
};

class Dad extends Grandpa {
    constructor(data) {
        super(data);
    }

    speak() {
        console.log(`${this.name} says, here's some wisdom for you son.`)
    };
};

class Me extends Dad {
    constructor(data) {
        super(data);
    }

    speak() {
        console.log(`${this.name} says 'I'm just here for the pizza'`)
    }
};

const james = new Me ({name: 'Jamison', birthPlace: 'Sandy, UT', eyeColor: 'Hazel', hairColor: 'Dark Brown'});
console.log(james);
james.speak();

const dad = new Dad ({name: 'Mike', birthPlace: 'SLC, UT', eyeColor: 'Brown', hairColor: 'Brown'});
console.log(dad);
dad.speak();

const grandpa = new Grandpa ({name: 'Ray', birthPlace: 'Circleville, UT', eyeColor: 'Blue', hairColor: 'White'});
console.log(grandpa);
grandpa.speak();


