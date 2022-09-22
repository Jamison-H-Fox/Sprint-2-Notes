// constructor functions are capitalized by convention. This won't change the syntax, it's just best practices

/*
function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
};

// break this method out. See note below for why.
Person.prototype.speak = function () {
        return `Hello, my name is ${this.name}.`;
};

function Child(childAttributes) {
    Person.call(this, childAttributes);
    this.isChild = childAttributes.isChild;
};

Child.prototype = Object.create(Person.prototype);

Child.prototype.checkIfChild = function() {
    if(this.isChild) {
        console.log(`My name is ${this.name} and I am a child object.`);
    }
};

const jamison = new Person({
    age: 32,
    name: 'Jamison',
    homeTown: 'Herriman'
});

const benton = new Child({
    age: 9,
    name: 'Benton',
    homeTown: 'Eagle Mountain',
    isChild: true
});

console.log(jamison);
console.log(jamison.speak());
console.log(benton);
console.log(benton.speak());
benton.checkIfChild();

// object prototype practice from codepen

// created a constructor function for Fruits
function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
};

// added a prototype method. Why not put this in the constructor function??
// Answer: appending the .shipped method to every object created by the 
//         constructor funcion would require a lot more memory. By storing
//         the method once in the prototype for all of the objects we can 
//         still access the method, but can keep our code much slimmer.
Fruit.prototype.shipped = function(destination) {
    console.log(`Shipping ${this.name} to ${destination}`);
};

// added a prototype method. Why not put this in the constructor function??
Fruit.prototype.calculateCals = function () {
    console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};

function Banana(bananaAttrs) {
    Fruit.call(this, bananaAttrs);
    this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
};
Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.checkIfMonkeysLikeIt = function() {
    if(this.doMonkeysLikeIt) {
        console.log(true);
    } else {
        console.log(false);
    }
};

function Kiwi(kiwiAttrs) {
    Fruit.call(this, kiwiAttrs);
    this.isFuzzy = kiwiAttrs.isFuzzy;
};

Kiwi.prototype = Object.create(Fruit.prototype);

Kiwi.prototype.checkIfFuzzy = function() {
    if(this.isFuzzy) {
        console.log(true);
    } else {
        console.log(false);
    }
};

const newBanana = new Banana({
    doMonkeysLikeIt: true,
    type: 'tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1
});

const newKiwi = new Kiwi({
    isFuzzy: true,
    type: 'Tree',
    name: 'Kiwi',
    isRipe: false,
    calories: 0.7
});

newBanana.shipped('Alaska');
newKiwi.shipped('Colorado');
newBanana.checkIfMonkeysLikeIt();
newKiwi.checkIfFuzzy();
newBanana.calculateCals();
newKiwi.calculateCals();

*/

/* ==== Prototypes Challenge

  1. Study the console.log() and object method invocations at the bottom of the page. Update the Animal and Dog constructors so that the logs and methods match the commented result next to them.
  
  2. Stretch Challenge: Create a new constructor function called Cat. Add properties and a method unique to a cat.  Make sure cat inherits from Animal so you can use all of the properties and methods found there.


You can check your work here:

https://codepen.io/BloomTech/pen/yxjRJa

*/


function Animal(attributes) {
    this.weight = attributes.weight;
    this.height = attributes.height;
    this.food = attributes.food;
    this.animalCommonName = attributes.animalCommonName;
  }
  
  Animal.prototype.eat = function() {
    console.log(`The ${this.animalCommonName} eats ${this.food}`);
  }
  
  function Dog(dogAttributes) {
    // Connect the attributes so we can use the this keyword
    Animal.call(this, dogAttributes);
    this.name = dogAttributes.name;
    this.bark = dogAttributes.bark;
  }
  // Set up our __proto__ inheritance to Animal
  Dog.prototype = Object.create(Animal.prototype);

  Dog.prototype.speak = function() {
    console.log(`${this.name} says: ${this.bark}`);
  }
  
  const dog = new Dog({
    'name': 'Dr. Doggo',
    'animalCommonName': "dog",
    'weight': 40,
    'height': 12,
    'food': 'meat',
    'bark': 'Woof!'
  });

  const dog2 = new Dog({
    'name': 'Lucy',
    'animalCommonName': "dog",
    'weight': 40,
    'height': 12,
    'food': 'cheese',
    'bark': 'Bark! Bark-bark-bark-BARK!'
  });
  
console.log(dog.animalCommonName); // "dog"
dog.eat(); // "The dog eats meat"
dog.speak(); // "Dr. Doggo says: Woof!"

dog2.eat();
dog2.speak();

//   console.log(dog);
  






