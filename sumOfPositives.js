function sumOfPositives(arr) {
  const sum = arr.filter((x) => x > 0).reduce((acc, num) => acc + num, 0);
  return sum;
}
// function sumOfPositives(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
console.log(sumOfPositives([1, -3, , -9, 5]));
