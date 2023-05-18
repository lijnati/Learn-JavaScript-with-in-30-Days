// Variables and Data Types
let name = "John";
const age = 25;
var isDeveloper = true;

// Operators and Expressions
let x = 5;
let y = 10;
let sum = x + y;
let isGreater = x > y;

// Control Flow and Conditional Statements
let hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

// Loops and Iteration
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}

let numbers = [1, 2, 3, 4, 5];
let total = 0;

for (let number of numbers) {
  total += number;
}

// Functions
function greet(name) {
  console.log("Hello, " + name + "!");
}

function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 3);

// Output
console.log(name); // Output: John
console.log(age); // Output: 25
console.log(isStudent); // Output: true

console.log(sum); // Output: 15
console.log(isGreater); // Output: false

console.log(greeting); // Output: Based on the current time of day

// Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

console.log(total); // Output: 15

greet("Alice"); // Output: Hello, Alice!
console.log(result); // Output: 15
