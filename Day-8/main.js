//Declaring Arrays
let carBrands = ['Benz','Tesla','BMW','Ford'];
//Accessing Array Elements
console.log("My Dream Car is " + carBrands[0]);

//Accessing Array Elements
let fruits = ["apple", "banana", "orange"];

fruits.push("grape"); // Adds "grape" to the end of the array

console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

fruits.pop(); // Removes the last element from the array

console.log(fruits); // Output: ["apple", "banana", "orange"]

fruits.unshift("kiwi"); // Adds "kiwi" to the beginning of the array

console.log(fruits); // Output: ["kiwi", "apple", "banana", "orange"]

fruits.shift(); // Removes the first element from the array

console.log(fruits); // Output: ["apple", "banana", "orange"]

fruits.splice(1, 1, "mango", "papaya"); // Removes 1 element at index 1 and adds "mango" and "papaya" in its place

console.log(fruits); // Output: ["apple", "mango", "papaya", "orange"]


//Array Iteration
let animals = ['Lion','Dog','Whale'];
for(let i = 0; i< animals.length;i++){
  console.log(animals[i]);
}