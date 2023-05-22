//Object Declaration
let userInfo = {
  name: 'John',
  age: 25,
  email: 'john123@gmail.com',
};

//Accessing Object Properties
console.log(userInfo.name);
console.log(userInfo['email']);

//Adding & Removing Properties
userInfo.country = 'US';
delete userInfo.age;
console.log(userInfo);

//Object Iteration Using For..in loop
let person = {
  hisName: "John",
  hisAge: 30,
  isStudent: true,
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

/*Object Iteration Using Object.key method:
let keys = Object.keys(person);

for (let key of keys) {
  console.log(key + ": " + person[key]);
}
*/



//Solution For the Exercise
let car = {
  brand: 'Merecedes',
  model:'Benz',
  priceInDollar: 49999
};
console.log(car.brand);
console.log(car['model']);
console.log(car.priceInDollar);

car.color = 'Black';
delete car.model;
console.log(car);



















