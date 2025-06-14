//
function areaCalculate(length, height) {
  if (length <= 0 || height <= 0) {
    throw new Error("negative number is not valid");
  }

  const area = length * height;
  console.log(area);
}
areaCalculate(30, 45);
areaCalculate(9, 0);
//
let a = "Hello";
let b = " world";

function addText(c, d) {
  return c + d;
}
// console.log(addText(a, b));
