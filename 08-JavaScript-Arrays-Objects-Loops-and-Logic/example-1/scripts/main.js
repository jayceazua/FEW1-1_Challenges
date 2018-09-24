// Your scripts here
const container = document.getElementById('container');

let displayAliens = () => {
    let str = ''
    for (var i = 0; i < data.length; i += 1) {
      const alien = data[i];
      const {name, image, power, rof, health} = alien;
      console.log(alien);
      str += `
      <div class="alien-card">
        <img src="${image}" width="32" height="32">
        <h1>${name}</h1>
        <div><span>Power: </span>${power}</div>
        <div><span>R.O.F.: </span>${rof}</div>
        <div><span>Health: </span>${health}</div>
      </div>
        `;
    }
    return str
}


container.innerHTML = displayAliens();

/*
Challenges: Your goal is to display a catalog of Aliens.
The aliens are stored in an array named: data.
Each element in the array is an object with properties that
describe an alien.

1. Explore the Array and contained Objects and identify the
properties. Print each alien to the console.

2. The default code prints the name of each Alien. In a div.
Add the other properties within the div. You'll want to add
some more markup. Use the example markup below for inspiration.

3. Generating all of the code within the for loop works. But,
the system could work better. A function would be an improvement.
Make a function that generates the HTML block
  - It should take in an obj as a parameter
  - It should return an HTML string

4. Add a style sheet (you can copy your styles from a previous
example)
<!--

  Example markup

<div class="alien-card">
  <img src="images/Alien-1_1.png" width="32" height="32">
  <h1>Blue Muncher</h1>
  <div><span>Power:</span>32.0</div>
  <div><span>R.O.F.</span>0.33</div>
  <div><span>Health</span>320</div>
</div>

  -->

    */