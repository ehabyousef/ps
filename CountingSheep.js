function CountingSheep(array) {
  return array.filter((x) => x === true).length;

  //? another solution
  //   let count = 0;
  //   array.map((s) => {
  //     if (s === true) count++;
  //   });
  //   return count;
}
console.log(
  CountingSheep([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    false,
    null,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
