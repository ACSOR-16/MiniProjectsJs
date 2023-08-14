const dogs = [{name: "Snick", age: 2}, {name: "Hug", age: 8}];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular

console.log("Hello");

// Interpolated

console.log("Hello I'm a %s string", "chi");

// Styled

console.log("%c I'm some great text", "font-size:20px; background:red; text-shadow:10px 10px 0 blue");

// warning!

console.warn("warning");

// Error :|

console.error("shit");

// Info

console.info("Crocodiles eat 3-4 people per year");

// Testing

const p = document.querySelector("p");

console.assert(p.classList.contains("xBREAKxDOWNx"), "thats is wrong")

// clearing

console.clear()

// Viewing DOM Elements

console.log(p);
console.dir(p);

// Grouping together

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 2} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Steve");
console.count("Steve");
console.count("Wes");

// timing

console.time("fetching data");
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs)