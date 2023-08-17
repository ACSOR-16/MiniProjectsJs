console.log("Hello World");
// start with strings, numbers and booleans
let age = 20;
let ageTwo = age;
console.log(age, ageTwo);
age = 50;
console.log(age, ageTwo);

let name = 'Wes';
let nameTwo = name;
console.log(name, nameTwo);
name = 'West';
console.log(name, nameTwo);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
const realTeam = new Array(...players);

players[1] = 'oscar'
console.log(players, team, realTeam);

// You might think we can just do something like this:
team[3] = "lux";

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
const teamThree = players.slice();

// one way
// or create a new array and concat the old one in
const teamFour = [].concat(players);

// or use the new ES6 Spread
const teamFive = [...players];
teamFive[2] = "willy";
console.log(teamFive);

const teamSix = Array.from(players);

// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 90;
console.log(captain);  

// how do we take a copy instead?
const capTwo = Object.assign({}, person, {number: 89, age: 12});
console.log(capTwo);
// We will hopefully soon see the object ...spread
const capThree = {...person};
console.log(capThree);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wes',
    facebook: 'wes.developer'
  }
};

// console.clear();
console.log(wes);

const dev = Object.assign({}, wes);
const dev2 = JSON.parse(JSON.stringify(wes));