class Car {
    // constructor function always named 'constructor' placed within the scope of the class
    constructor(props) {
        this.make = props.make;
        this.model = props.model;
        this.year = props.year;
    }
    // attach methods here
    salesPitch() {
        return `This vehicle is a ${this.year} ${this.make} ${this.model}`
    }
};

const car1 = new Car({
    make: 'Honda',
    model: 'Civic',
    year: 2022
});

console.log(car1);
console.log(car1.salesPitch());








