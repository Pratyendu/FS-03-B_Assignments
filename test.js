// Create an array called fruits with the following elements: "apple", "banana", "orange", "grape".
// Add a new fruit "kiwi" to the end of the fruits array using the push() method.
// Remove the last fruit from the fruits array using the pop() method.
// Add a new fruit "lemon" to the beginning of the fruits array using the unshift() method.
// Remove the first fruit from the fruits array using the shift() method.
// Find the index of the fruit "orange" in the fruits array using the indexOf() method and assign it to a variable called index.
// Print the value of the index variable using console.log().
// Use the slice() method to create a new array called citrus that contains the fruits "orange" and "lemon".
// Print the value of the citrus array using console.log().

console.log('----------------------------------------------------1st Assignment-----------------------------------------------------------------------');

let fruits = ['apple', 'banana', 'orange', 'grape'];

fruits.push('kiwi');
fruits.pop();
fruits.unshift('lemon');
fruits.shift();

let index = fruits.indexOf('orange');
console.log(index);

let citrus = fruits.slice(1, 3);
console.log(citrus);

console.log('----------------------------------------------------2nd Assignment-----------------------------------------------------------------------');

// Create an object called person.
// Add the following properties to the person object:
// name (string)
// age (number)
// address (string)
// Print the value of each property using console.log().
// Update the value of the age property to 30.
// Add a new property email (string) to the person object.
// Delete the address property from the person object.

let person = {
	name: 'Pratyendu Sarkar',
	age: 24,
	address: '64E, S.G.G. Road , Kolkata-700031',
};

console.log(person.name);
console.log(person.age);
console.log(person.address);

person.age = 30;
person.email = 'pratyendu@gmail.com';

delete person.address;

console.log(person.age);
console.log(person.email);
