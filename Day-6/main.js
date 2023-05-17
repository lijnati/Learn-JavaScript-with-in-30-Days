/*Function Declaration
The most common way to define a function is through function declaration */

function sayHello() {

   console.log("Hello");

}
sayHello();

/*Parameters and Argument
Functions can accept inputs called parameters. These parameters act as placeholders for values that will be passed when the function is invoked.*/

function greet(name,id) {
  console.log("Hello " + name + " Your ID is " + id);
}

greet("John",025);

/*Return Statement
Functions can also return values using the return statement. Here's an example: */
function add(a, b) {
  return a + b;
}

let result = add(2, 3); // Invoke add function and store the result in a variable
console.log(result); // Output: 5

//Another Example
function pets(pet1,pet2) {
  return "I like " + pet1 + " but not " + pet2
}

let petName= pets("dog","cat");
console.log(petName);

/*Function Expression
Functions can also be assigned to variables, which are known as function expressions.*/

let newUser = function(name) {
  console.log("Welcome " + name);
};

newUser('Mark');

/*Arrow Functions 
provide a more compact and simplified way of writing function expressions compared to traditional function declarations. */

const sum = (x,y) => x + y;
console.log(sum(7,5));