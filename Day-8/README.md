# Day 8: Arrays in JavaScript

In this lesson, we'll explore the concept of arrays in JavaScript. Arrays are used to store multiple values in a single variable and provide various methods to manipulate and access the data within them.

## Topics Covered

- Array declaration and initialization
You can declare an array in JavaScript using square brackets [] and assign values to it. 
```
let carBrands = ["Benz", "Tesla", "BMW"];
```
- Accessing array elements
You can access individual elements in an array using their index. The index starts from 0 for the first element. 
```
let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: orange

```
- Adding and removing elements
JavaScript provides several methods to add and remove elements from an array:
    `push`: Adds one or more elements to the end of an array.
    `pop`: Removes the last element from an array.
    `unshift`: Adds one or more elements to the beginning of an array.
    `shift`: Removes the first element from an array.
    `splice`: Adds or removes elements from a specific position in an array.
    
```
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

```

- Array iteration
You can iterate over the elements of an array using loops, such as `for` loop or `forEach` method. example using a for loop:

```
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

```

You can also use the `forEach` method, which provides a more concise way to iterate over the array:
```
let fruits = ["apple", "banana", "orange"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

```
## Exercises

To practice working with arrays, here are a few exercises you can try:

1. Create an array of your favorite movies. Print each movie title using a loop or the `forEach` method.
2. Add a new movie to the array using the appropriate method.
3. Remove the second movie from the array using the appropriate method.
4. Use the `splice` method to replace the third movie with a different movie.

## Resources

- [MDN Web Docs: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

Make sure to check out the resources above for more in-depth information on arrays in JavaScript.

Keep up the great work, and happy coding!