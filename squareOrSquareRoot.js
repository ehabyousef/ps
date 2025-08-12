function squareOrSquareRoot(array) {
  //   let newA = [];
  //   for (let i = 0; i < array.length; i++) {
  //     if (Number.isInteger(Math.sqrt(array[i]))) {
  //       newA.push(Math.sqrt(array[i]));
  //     } else {
  //       newA.push(array[i] * array[i]);
  //     }
  //   }
  //   return newA;

  return array.map((i) =>
    Number.isInteger(Math.sqrt(i)) ? Math.sqrt(i) : i * i
  );
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
