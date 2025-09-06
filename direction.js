function direction(facing, turn) {
  // your code here
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  let curIndex = directions.indexOf(facing);
  let val = turn / 45;
  const newIndex = (curIndex + val) % directions.length;
  const final = newIndex < 0 ? directions.length + newIndex : newIndex;
  return directions[final];
}

// "S",  180  -->  "N"
console.log(direction("N", -450));
