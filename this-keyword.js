// Four principles 
// 1. Global binding means that when in global scope, the value of 'this' is the window/console object
// 2. Implicit binding means that when not in the global scope, the value of 'this' is the object directly to the left of the method in quesiton
// 3. New binding whenever a **constructor function** is used, 'this' refers to the specific instance of the object that is created and retured by the constructor function
// 4. Explicit binding using the .call, .bind, or .apply we explicitly define the value of 'this'

const myObj = {
    greeting: 'Hello',
    speak: function() {
        console.log('implicit this: === ', this);
        return `${this.greeting}, world!`;
    }
};

// myObj.speak();

function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log(`This new binding`, this);
        return `Hello, my name is ${this.name} and I am ${this.age} years old!`;
    }
};

const jamison = new Person({name: 'Jamison', age: '32'});
// jamison.speak();
const benton = new Person({name: 'Benton', age: '9'});
// benton.speak();
// jamison.speak.call(benton);

const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Ryan' };
  const you = { name: 'Freddy' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  // Invoke Methods on our objects
  me.sayName();
  you.sayName();






