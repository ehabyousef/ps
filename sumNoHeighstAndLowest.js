//{ 6, 2, 1, 8, 10 } => 16

function sumArray(array) {
  if (array == null) return 0;
  if (array.length == 0) return 0;

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, num) => acc + num, 0);
  //   let min = Math.min(...array);
  //   let max = Math.max(...array);
  //   return array
  //     .filter((x) => x !== min && x !== max)
  //     .reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([0, 6, 2, 1, 8, 10]));
