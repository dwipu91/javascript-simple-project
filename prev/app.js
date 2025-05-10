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

console.log(result);

const result2 = data.map(function (currentValue, index, arr) {});
// console.log(result2);
