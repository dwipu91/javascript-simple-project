//  Advanced Foundations
// Methods & Loops
//  Functions Expressions & Parameters
//  Asynchronous javaScript & APIs

// Logical Operators & Coalescing
//  Working with Objects
// Collections & Symbols
//  Advanced Function Patterns & Generators

// ========= //
const data = {
  id: 1,
  name: "John Doe",
  age: 30,
};
const data1 = {
  id: 1,
  name: "John Doe",
  age: 31,
};

const over = { ...data, ...data1 };
const result = Object.assign(data, data1);

// Object.assign() is used to copy the values of all enumerable own properties from one or more source objects to a target object.

// It returns the target object.
// If the target object is not provided, a new object is created.
// If a property exists in both the target and source objects, the value from the source object will overwrite the value in the target object.

// const promise = new Promise((resolve, reject) => {
//   resolve("Success");
//   console.log("Executing promise");
// })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("error", error);
//   })
//   .then((data) => {
//     console.log("data");
//   });

// Promise.resolve(() => {
//   return "hello";
// }).then((data) => {
//   console.log(data);
// });

// const exerciseTimerMins = 10;
// let message =
//   exerciseTimerMins > 30
//     ? "You have exercised for more than 30 minutes."
//     : "not good";

// console.log(message);

let exerciseTimerMins = 10;
const timeMin =
  exerciseTimerMins < 30
    ? "you have exercised for less than 30 minutes."
    : "not use in 30 minutes";
console.log(timeMin);
