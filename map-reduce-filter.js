console.clear();

const friends = [
    {"First Name":'Joey', "Last Name": "Tribbiani", "Gender":"Male", "Age": 24},
    {"First Name":'Ross', "Last Name": "Gheller","Gender":"Male", "Age": 25},
    {"First Name":'Chandler', "Last Name": "Bing","Gender":"Male", "Age": 25},
    {"First Name":'Rachel', "Last Name": "?","Gender":"Female", "Age": 22},
    {"First Name":'Monica', "Last Name": "Gheller","Gender":"Female", "Age": 22},
    {"First Name":'Phoebe', "Last Name": "Buffet","Gender":"Female", "Age": 26}
]

const data = [
  {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
  {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
  {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
  {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

// array.map((element, index, array) => {expression})
const mappedCityStates = data.map((lol) => {
  return {'city': lol.city, 'state': lol.state};
});

console.log(mappedCityStates);
console.log(friends);

// syntax for .map ---> const variable = input.map((element) => {expression});
const firstNameOnly = friends.map((key) => {
  return {'First Name':key["First Name"]};
});

console.log(firstNameOnly);

// syntax for .filter ---> const variable = input.filter((element) => {expression});
const maleOnly = friends.filter((key) => {
  return key["Gender"] === "Male";
});

console.log(maleOnly);

// syntax for .reduce ---> const variable = input.reduce((accumulator, element) => {expresion}, start value);
const totalAge = friends.reduce((total, element) => {
  return total += element['Age'];
}, 0);

console.log(totalAge)


