const values = [42, "42", true, null, undefined, [1, 2, 3], { a: 1 }, function () {}, NaN];

function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

for (const value of values) {
  console.log(value, "->", typeof value, "| accurate:", getType(value));
}
