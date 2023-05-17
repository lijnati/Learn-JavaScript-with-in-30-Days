# Learning JavaScript - Day 6

Welcome to Day 6 of the JavaScript learning series! Today, we'll dive into functions in JavaScript.

## Concepts Covered

- Function Declaration: Learn how to define functions using the `function` keyword.
   The most common way to define a function is through function declaration 
```
      function sayHello() {
         console.log("Hello");
      }
sayHello();
```
- Parameters and Arguments: Understand how to pass values to functions through parameters and arguments.
   Functions can accept inputs called parameters. These parameters act as placeholders for values that will be passed when the function is invoked.

   ```
    function greet(name,id) {
       console.log("Hello " + name + " Your ID is " + id);
     }

     greet("John",025);
   ```
- Return Statements: Explore how functions can return values using the `return` statement.
   
   Functions can also return values using the return statement.

   ```
     function pets(pet1,pet2) {
         return "I like " + pet1 + " but not " + pet2
     }

     let petName= pets("dog","cat");
     console.log(petName);
   ```
- Function Expressions: Discover the concept of assigning functions to variables.
     Functions can also be assigned to variables, which are known as function expressions.
```
let newUser = function(name) {
  console.log("Welcome " + name);
};

newUser('Mark');
```
- Arrow Functions: Learn how to define functions using the arrow function syntax.

    Arrow functions, also known as arrow function expressions, are a concise syntax for defining functions in JavaScript. They provide a more compact and simplified way of writing function expressions compared to traditional function declarations.
  ```
  const add = (a, b) => a + b;
  ```

## Exercises

To practice functions, here are some exercises for you:

1. Write a function that takes two numbers as parameters and returns their sum.
2. Create a function that converts a temperature from Celsius to Fahrenheit.
3. Write a function that checks if a given number is prime.

## Resources

- [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
- [JavaScript Function Parameters](https://www.w3schools.com/js/js_function_parameters.asp)
- [JavaScript Return Statement](https://www.w3schools.com/js/js_return.asp)
- [JavaScript Function Expressions](https://www.w3schools.com/js/js_function_definition.asp)

Keep up the great work! Happy coding on your JavaScript learning journey!