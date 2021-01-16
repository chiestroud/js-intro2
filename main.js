console.log("Hello");

// **** First Style of Function ****

// function sayHello() {
//   console.log("hello");
// }

// **** Second Style of Function ****

// const sayHello = function() {
//   console.log('hello');
// }

// **** Third Style of Function ****

// const sayHello = () => {
//   console.log('hello');
// }

// sayHello();


// ****** FUNCTIONS WITH ARGUMENTS ******
// function logsHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// logsHello('Chie');

const sum = 55;

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum);
  return sum;
}

console.log(sum);
console.log(addsTwoNumbers(5, 9));
