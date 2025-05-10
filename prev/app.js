const color = [
  { id: "1", color: "red" },
  { id: "2", color: "blue" },
  { id: "3", color: "yellow" },
  { id: "4", color: "tomato" },
];
function setColor() {}
// setColor();

const data = [1, 2, 3, 4, 5, 46, 6, 7, 8, 8, 10];

const result = data.filter(function (currentValue, index, arrey) {
  if (currentValue < 10) {
    return true;
  }
  return false;
});
// console.log("hello");

const result2 = data.map(function (currentValue, index, arr) {});
// console.log(result2);
// console.log(color[2]);

//
const array = [1, 2, 3, 5, 4, 6];
const array2 = [7, 8];
let one = array.concat(array2);
one.push(12);
one.unshift(12);
one.pop();

// console.log(one.reverse());

//
const number = 10;
const number2 = 20;

const number3 = 40;
const number4 = 49;

let total = number + number2 + number3 + number4;

function calculation(n1, n2) {
  const total = n1 + n2;
  return total;
}
// console.log(calculation(19, 29));

function dad(n, m) {
  console.log(n);
  console.log(m);
}
// dad(2);

const dwipu = {
  age: 87,
  height: 5.4,
  name: "Akteruzzaman dipu",
  demo: function dipu() {
    // console.log("demo");
  },
};

// console.log(dwipu());

//
const test = "i will test on the time";
const add = test.at(-5);

// console.log(add);

//challenge 2
const arr1 = [1, 0, 9, 3, 4, 5];
const arr2 = [2, 4, 56, 7];

const arr3 = arr1.slice(0, 3).concat(arr2);
// console.log(arr3);
const arr4 = [...arr1, ...arr2];
arr4.splice(5, 1);
// console.log(arr4);

/* 
        object literal
*/
let dipu;
const parson = {
  name: "Akteruzzaman",
  age: 34,
  isAdmin: true,
  address: {
    street: "123 street",
    city: "Boston",
    state: "SM",
  },
  hobbis: ["Lodu", "Chaees"],
};
dipu = parson;
// console.log(dipu.name);

const obj = {
  edu: "ak",
};

// console.log("edru" in obj);

const res = 50 < 100 ? "nit" : "haitya";
// console.log(res);

const car = {
  brand: "Volvo",
  model: "EX90",
};

delete car.model;
// console.log(car);

// const parson = { firstName: "Akteruzzaman", lastName: "Dipu", age: 30, id: 87 };

// function name(params) {}

const parson1 = {
  firestName: "Akteruzzaman",
  lastName: "Dipu",
  age: 90,
};
const parson2 = { firestName: "Afsana", lastName: "Roksana" };
const adds = Object.assign(parson1, parson2);
// console.log(adds);

// function adds() {
//   console.log(this);
// }
// console.log(adds());
