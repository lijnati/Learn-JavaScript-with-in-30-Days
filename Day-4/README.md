# Learning JavaScript - Day 4

Welcome to Day 4 of the JavaScript learning series! Today, we'll focus on control flow and conditional statements in JavaScript.

## Concepts Covered

- If-Else Statements: Learn how to perform different actions based on conditions.
The if-else statement is used to perform different actions based on a condition. It evaluates a condition and executes a block of code if the condition is true, and an alternative block if the condition is false.
```
var age = 18;

if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("Sorry, you are not eligible to vote.");
}
```
- Switch Statements: Explore an alternative way to perform multiple actions based on different cases.
The switch statement provides an alternative way to perform multiple different actions based on different conditions. It allows us to compare a value against multiple cases and execute the code block that matches the case.
```
var day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the beginning of the week.");
    break;
  case "Friday":
    console.log("It's finally Friday!");
    break;
  default:
    console.log("Enjoy your day!");
    break;
}

```
- Ternary Operator: Discover a concise way to write conditional statements.
The ternary operator provides a concise way to write conditional statements with a single line of code. It evaluates a condition and returns one of two expressions depending on the condition's result.
```
var age = 25;
var message = (age >= 18) ? "You are an adult." : "You are a minor.";

console.log(message);

```
## Exercises

To practice control flow and conditional statements, here are some exercises for you:

1. Write a program that checks if a number is positive, negative, or zero.
2. Create a function that determines the grade based on a student's score.
3. Write a program that determines if a year is a leap year or not.


## Resources

- [MDN Web Docs: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript Control Flow](https://www.w3schools.com/js/js_if_else.asp)
- [JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)
- [JavaScript Ternary Operator](https://www.w3schools.com/js/js_comparisons.asp#ternary-operator)

Keep up the great work! Happy coding on your JavaScript learning journey!
