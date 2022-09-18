console.clear();

const friends = [
    {"Name":'Joey', "Gender":"Male"},
    {"Name":'Ross', "Gender":"Male"},
    {"Name":'Chandler', "Gender":"Male"},
    {"Name":'Rachel', "Gender":"Female"},
    {"Name":'Monica', "Gender":"Female"},
    {"Name":'Phoebe', "Gender":"Female"}
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

console.log(data);
console.log(friends);

console.log("Hello World");
console.log("Look ma, I'm a real programmer!");






