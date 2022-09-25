/*
This assignment is to be used as a follow along.
*/
// function Fruit(attrs) {
    // this.type = attrs.type;
    // this.name = attrs.name;
    // this.isRipe = attrs.isRipe;
    // this.calories = attrs.calories;
//   }

//   Fruit.prototype.shipped = function(destination) {
//     return `Shipping ${this.name} to ${destination}`;
//   };
  
//   Fruit.prototype.calculateCals = function() {
//     return `Calories in ${this.name} are ${this.calories * 200}`;
//   };

// class Fruit {
//     constructor(attrs) {
//         this.type = attrs.type;
//         this.name = attrs.name;
//         this.isRipe = attrs.isRipe;
//         this.calories = attrs.calories;
//     }
//     shipped(destination) {
//         return `Shipping ${this.name} to ${destination}`;
//     }
//     calculateCals() {
//         return `Calories in ${this.name} are ${this.calories * 200}`;
//     };
// }
  
// function Banana(bananaAttrs) {
//     Fruit.call(this, bananaAttrs);
//     this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
// }
  
// Banana.prototype = Object.create(Fruit.prototype);
  
// Banana.prototype.checkIfMonkeysLikeIt = function() {
//     if(this.doMonkeysLikeIt) {
//       return true;
//     } else {
//       return false;
//     }
// };
  
// class Banana extends Fruit {
//     constructor(bananaAttrs) {
//         super(bananaAttrs);
//         this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
//     };
//     checkIfMonkeysLikeIt() {
//         if(this.doMonkeysLikeIt) {
//           return true;
//         } else {
//           return false;
//         }
//     };
// };

// function Kiwi(kiwiAttrs) {
//     Fruit.call(this, kiwiAttrs);
//     this.isFuzzy = kiwiAttrs.isFuzzy;
// }
  
// Kiwi.prototype = Object.create(Fruit.prototype);
  
// Kiwi.prototype.checkIfFuzzy = function() {
//      if(this.isFuzzy) {
//       return true;
//     } else {
//       return false;
//     }
// }
  
// class Kiwi extends Fruit {
//     constructor(kiwiAttrs) {
//         super(kiwiAttrs);
//         this.isFuzzy =kiwiAttrs.isFuzzy;
//     };
//     checkIfFuzzy = function() {
//         if(this.isFuzzy) {
//          return true;
//        } else {
//          return false;
//        }
//    };
// };

// const newBanana = new Banana({
//     doMonkeysLikeIt: true,
//     type: 'Tree',
//     name: 'Banana',
//     isRipe: false,
//     calories: 0.1
// });
  
// const newKiwi = new Kiwi({
//     isFuzzy: true,
//     type: 'Tree',
//     name: 'Kiwi',
//     isRipe: false,
//     calories: 0.7
// });
  
// console.log(newBanana.shipped('Alaska'));
// console.log(newKiwi.shipped('Colorado'));
// console.log(newBanana.checkIfMonkeysLikeIt());
// console.log(newKiwi.checkIfFuzzy());
// console.log(newBanana.calculateCals());
// console.log(newKiwi.calculateCals());
// console.log(Banana);

// More practice from codePen

/* ==== Prototypes to Class Conversion Challenge

  1. Study the console.log() and object method invocations at the bottom of the page. Convert the constructor classes into class syntax
  
  2. Stretch Challenge: Create a new class function called Cat that extends Animal. Add properties and a method unique to a cat.  Make sure cat inherits from Animal so you can use all of the properties and methods found there.  Console.log() unique features of the cat as well as inherited properties from Animal.

Potential solution - Avoid looking until you're finished: 

https://codepen.io/lambdaschool/pen/gdKQbb?editors=0012

*/

class Animal {
    constructor(attributes) {
        this.animalCommonName = attributes.animalCommonName;
        this.weight = attributes.weight;
        this.height = attributes.height;
        this.food = attributes.food;
    }
    eat() {
        console.log(`The ${this.animalCommonName} eats ${this.food}`);
      }
};

// function Animal(attributes) {
//     this.animalCommonName = attributes.animalCommonName;
//     this.weight = attributes.weight;
//     this.height = attributes.height;
//     this.food = attributes.food;
//   }
  
//   Animal.prototype.eat = function() {
//     console.log(`The ${this.animalCommonName} eats ${this.food}`);
//   }
  
class Dog extends Animal {
    constructor(dogAttributes) {
        super(dogAttributes);
        this.name = dogAttributes.name;
        this.bark = dogAttributes.bark;
    };
    speak() {
        console.log(`${this.name} says: ${this.bark}`);
    };
};

//   function Dog(dogAttributes) {
//     // Connect the attributes so we can use the this keyword
//     Animal.call(this, dogAttributes);
//     this.name = dogAttributes.name;
//     this.bark = dogAttributes.bark;
//   }
  // Set up our __proto__ inheritance to Animal
//   Dog.prototype = Object.create(Animal.prototype);
  
//   Dog.prototype.speak = function() {
//     console.log(`${this.name} says: ${this.bark}`);
//   }
  
class Cat extends Animal {
    constructor(catAttributes) {
        super(catAttributes);
        this.name = catAttributes.name;
        this.sound = catAttributes.sound;
    };
    slice() {
        console.log(`${this.name} uses it's death blades to gouge your flesh!`);
    };
};

const dog = new Dog({
    'name': 'Dr. Doggo',
    'animalCommonName': "dog",
    'weight': 40,
    'height': 12,
    'food': 'meat',
    'bark': 'Woof!'
});
  
const cat = new Cat({
    'name': 'Nelson',
    'animalCommonName': "cat",
    'weight': 15,
    'height': 9,
    'food': 'the flesh of his enemies',
    'sound': 'Meow!' 
})

console.log(dog.animalCommonName); // "dog"
dog.eat(); // "The dog eats meat"
dog.speak(); // "Dr. Doggo says: Woof!"

console.log(cat.animalCommonName);
cat.slice();
cat.eat();




