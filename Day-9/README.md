# Day 9: Objects in JavaScript

In this lesson, we'll explore the concept of objects in JavaScript. Objects are a fundamental part of the language and provide a way to organize and manipulate data. We'll cover object declaration, accessing properties, adding/removing properties, object iteration, and more.

## Topics Covered

- Object Declaration: Learn how to create objects using curly braces `{}` and define key-value pairs.
```
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};
```
- Accessing Object Properties: Understand how to access object properties using dot notation (`object.property`) and bracket notation (`object['property']`).
```
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

console.log(person.name); // Output: John
console.log(person['age']); // Output: 30
```
- Adding and Removing Properties: Explore how to dynamically add and remove properties from objects.
To add a property, you can simply assign a value to a new property key:
```
let person = {
  name: "John",
  age: 30,
};

person.isStudent = true;

console.log(person); // Output: { name: "John", age: 30, isStudent: true }
```
To remove a property, you can use the `delete` operator:
```
let person = {
  name: "John",
  age: 30,
};

delete person.age;

console.log(person); // Output: { name: "John" }
```
- Object Iteration: Learn various techniques for iterating over object properties.
You can iterate over the properties of an object using `for...in` loop or `Object.keys()` method. Here's an example using `for...in` loop:
```
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```
You can also use the Object.keys() method to get an array of the object's keys and iterate over it:
```
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

let keys = Object.keys(person);

for (let key of keys) {
  console.log(key + ": " + person[key]);
}
```
## Examples and Exercises

To reinforce your understanding of objects in JavaScript, try the following exercises:

1. Create an object called `person` with properties like `name`, `age`, and `isStudent`. Assign values to these properties.
2. Access the `name` property of the `person` object using dot notation and print it to the console.
3. Add a new property called `email` to the `person` object and assign it a value.
4. Remove the `isStudent` property from the `person` object.
5. Iterate over the properties of the `person` object and print each property key and value.

These exercises will help solidify your understanding of objects and their usage in JavaScript.

## Resources

- [MDN Web Docs: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript Object Basics](https://www.w3schools.com/js/js_objects.asp)

Make sure to check out the resources above for more in-depth information on objects in JavaScript.

Happy coding!
