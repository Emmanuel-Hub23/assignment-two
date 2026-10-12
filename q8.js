let a = 10;
let b = a;
b = 20;
console.log(a, b);

let userOne = { name: "Amaka", age: 22, address: { city: "Lagos" } };
let userTwo = { ...userOne };
userTwo.age = 40;
userTwo.address.city = "Abuja";
console.log(userOne.age, userOne.address.city);

function deepCopy(value) {
  return structuredClone(value);
}
let userThree = deepCopy(userOne);
userThree.address.city = "Kano";
console.log(userOne.address.city, userThree.address.city);
