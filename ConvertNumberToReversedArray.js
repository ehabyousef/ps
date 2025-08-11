function ConvertNumberToReversedArray(n) {
  let news = n
    .toString()
    .split("")
    .map((x) => Number(x))
    .reverse();
  return news;
}

console.log(ConvertNumberToReversedArray(321));
