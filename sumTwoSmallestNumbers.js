// [19, 5, 42, 2, 77], the output should be 7.
function sumTwoSmallestNumbers(numbers) {
  let res = 0;
  let newa = numbers.sort((a, b) => a - b).slice(0, 2);
  for (let i = 0; i < newa.length; i++) {
    res += newa[i];
  }
  return res;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
