const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();


const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");


/*For the rest of this exercise, we will be using functions that return a value. This means that we will have 
to console.log our values outside of the function.*/

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 


const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

console.log(greeting);