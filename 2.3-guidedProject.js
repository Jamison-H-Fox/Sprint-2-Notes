// window binding
// var cat = 'Niamh';
// const catName = () => {
//     return `${this.cat} is cute`;
// };

// function catNameTraditional() {
//     return `${this.cat} is cute`;
// }

// console.log(catName());
// console.log(catNameTraditional());

// const cat = {
//     name: 'Niamh',
//     age: '4',
//     statusCheck: () => {
//         return `${this.name} is ${this.age} years old.`
//     }
// };

// console.log(cat.statusCheck());

// implicit binding
// dot syntax is implicit binding

// const teacher = {
//     name: 'Keiran',
//     subject: 'web development',
//     teach: function() {
//         return `${this.name} likes to teach ${this.subject}`;
//     }
// };

// console.log(teacher.teach());

// explicit binding
// use .call() to explicitly set the context of .this keyword for the function
// use .bind() to create a new object with values equal to the thing .binded to it

// function bark() {
//     return `${this.name} barks loudly!`;
// };

// const dog = {
//     name: 'Lilly',
//     age: 4
// };

// const dog2 = {
//     name: 'Lucy',
//     age: 4
// }

// console.log(bark());
// console.log(bark.call(dog));
// console.log(bark.call(dog2));

// const barkingLilly = bark.bind(dog);
// const barkingLucy = bark.bind(dog2);

// console.log(barkingLilly);
// console.log(barkingLilly());
// console.log(barkingLucy);
// console.log(barkingLucy());

// NEW BINDING can bind to a prototype using a constructor function
// function Enemy(props) {
//     this.health = props.health;
//     this.weapon = props.weapon
// };

// const enemy1 = new Enemy({health: 5, weapon: 'sword'});
// const enemy2 = new Enemy({health: 10, weapon: 'mace'});
// const enemy3 = new Enemy({health: 15, weapon: 'pike'});

// console.log(enemy1);
// console.log(enemy2);
// console.log(enemy3);

function Animal(props) {
    this.species = props.species;
    this.commonName = props.commonName;
};

Animal.prototype.statusCheck = function() {
    return `${this.species} is also known as ${this.commonName}.`
};

const animal1 = new Animal({species: 'Homo sapiens', commonName: 'human'});
const animal2 = new Animal({species: 'Canis Lupus Familiaris', commonName: 'dog'});

// console.log('animal1:', animal1);
// console.log('animal2:', animal2);

// console.log(animal1.statusCheck());
// console.log(animal2.statusCheck());

// Inheritance
function Amphibian(props) {
    Animal.call(this, props); // this grabs all of the Animal prototype stuff, and then adds more below it.
    this.color = props.color;
    this.sound = props.sound;
};

Amphibian.prototype = Object.create(Animal.prototype);
Amphibian.prototype.croak = function() {
    return `${this.species} makes the following croaking noise: ${this.sound}.`;
};

const amphibian1 = new Amphibian({species: 'Phyllobates bicolor', commonName: 'black-legged poison frog', color: 'black and yellow', sound: 'ribbit'})
console.log(amphibian1);
console.log(amphibian1.statusCheck());
console.log(amphibian1.croak());

function Mammal(props) {
    Animal.call(this, props); // pulls Animal prototype stuff
    this.isFurry = props.isFurry;
    this.isCute = props.isCute;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.isCuteCheck = function() {
    if (this.isCute) {
        return 'Yes, this mammal is cute';
    } else {
        return 'No, this mammal is not cute';
    };
}
Mammal.prototype.isFurryCheck = function() {
    if (this.isFurry) {
        return 'Yes, this mammal is furry';
    } else {
        return 'No, this mammal is not furry';
    };
}

const mammal1 = new Mammal({ species: 'Bos Taurus', commonName: "Cow", isFurry: true, isCute: true});
console.log(mammal1);
console.log(mammal1.isCuteCheck());
console.log(mammal1.isFurryCheck());





