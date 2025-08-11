function countPositivesSumNegatives(input) {
  if (!input || input.length === 0 || input.every((x) => x === 0)) return [];
  let neg = input.filter((x) => x < 0).reduce((acc, num) => acc + num, 0);
  let pos = input.filter((x) => x > 0).length;
  return [pos, neg];
}
console.log(countPositivesSumNegatives([0, 0])); // []
