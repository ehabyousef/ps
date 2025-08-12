// x = 1, n = 10
// (x = 2), (n = 5);
// function countByX(x, n) {
//   if (x && n < 0) return;
//   let newArray = [];
//   for (let i = 1; i <= n; i++) {
//     newArray.push(x * i);
//   }
//   return newArray;
// }
// console.log(countByX(2, 5));
function strStr(haystack, needle) {
  return haystack.includes(needle) ? haystack.indexOf(needle) : -1;
}
console.log(strStr("sadbutsad", "db"));
