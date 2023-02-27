// how to run javascript on VSCode

//console.log('First JS program on VS Code')

//Javascript Tutorial for Beginners: Learn Javascript in 1 hour

// my first javascript code
// console.log("Hello World");

// let name = "Carlos";
// console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

// let firstName;
// let FirstName;

// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

let name = "Carlos"; //string literal
let age = 30; //number literal
let isApproved = true; // boolean literal
let firstName = undefined;
// let selectedColor = null;

let person = {
	name: "Carlos",
	age: 30,
};

// Dot notation
person.name = "John";

// Bracket notation
let selection = "name";
person[selection] = "Mary";

// console.log(person.name);

let selectedColor = ["red", "blue"];
selectedColor[2] = 1;

// console.log(selectedColor.length);

//Performing a task
function greet(name, lastName) {
	console.log("Hello " + name + " " + lastName);
}

// Calculating a value
function square(number) {
	return number * number;
}
console.log(square(2));
