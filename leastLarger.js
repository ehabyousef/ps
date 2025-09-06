// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
function leastLarger(a, i) {
  let indVal = a[i];
  let newArr = a.filter((x) => x > indVal);
  if (newArr.length <= 0) return -1;
  let spot = Math.min(...newArr);
  return a.indexOf(spot);
}

console.log(leastLarger([4, 1, 3, 5, 6], 0));
