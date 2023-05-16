# Learning JavaScript - Day 5

Welcome to Day 5 of the JavaScript learning series! Today, we'll dive into loops and iteration in JavaScript.

## Concepts Covered

- For Loop: Learn how to execute a block of code for a specified number of times

The for loop is commonly used when you know the number of iterations in advance. It consists of three parts: initialization, condition, and increment/decrement.

```
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

```
- While Loop: Discover how to repeatedly execute a block of code while a condition is true

The while loop is used when you don't know the number of iterations in advance, and the loop continues as long as the condition is true.
```
let i = 0;

while (i < 5) {
  console.log("Iteration " + i);
  i++;
}
```
- Do-While Loop: Explore a loop that executes the code block at least once before checking the condition

The do-while loop is similar to the while loop, but it always executes the loop body at least once before checking the condition

```
let i = 0;

do {
  console.log("Iteration " + i);
  i++;
} while (i < 5);

```
- Break and Continue Statements: Understand how to control the flow of loops with these statements

The break statement allows you to terminate a loop prematurely, while the continue statement skips the rest of the current iteration and moves to the next iteration

```
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    break; // Terminate the loop when i equals 2
  }
  
  if (i === 1) {
    continue; // Skip the rest of the current iteration when i equals 1
  }
  
  console.log("Iteration " + i);
}

```

## Exercises

To practice loops and iteration, here are some exercises for you:

1. Write a program that calculates the sum of all numbers from 1 to 10 using a loop.
2. Create a function that prints a multiplication table for a given number up to a certain range.
3. Write a program that finds the factorial of a given number using a loop.


## Resources

- [MDN Web Docs: Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [JavaScript For Loop](https://www.w3schools.com/js/js_loop_for.asp)
- [JavaScript While Loop](https://www.w3schools.com/js/js_loop_while.asp)
- [JavaScript Do-While Loop](https://www.w3schools.com/js/js_loop_do_while.asp)
- [JavaScript Break and Continue](https://www.w3schools.com/js/js_break.asp)

Keep up the great work! Happy coding on your JavaScript learning journey!