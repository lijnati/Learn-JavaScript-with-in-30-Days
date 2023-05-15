// If-else Statement

var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote!");
} else {
  console.log("Sorry, you are not eligible to vote.");
}

//Switch Statement
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

//Ternary Operator
var age = 25;
var message = (age >= 18) ? "You are an adult." : "You are a minor.";

console.log(message);
