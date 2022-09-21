// constructor functions are capitalized by convention. This won't change the syntax, it's just best practices

function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
        return `Hello, my name is ${this.name}.`;
    };
};

const jamison = new Person({
    age: 32,
    name: 'Jamison',
    homeTown: 'Herriman'
});

console.log(jamison);
console.log(jamison.speak());








